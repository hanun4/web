import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

/**
 * 导航
 * 作品 = 独立页 /works
 * 首页 / 关于 / 联系 = 首页锚点（带 pathname 跨路由跳回）
 */
const LINKS = [
  { num: '01', label: '首页',   to: { pathname: '/', hash: '#hero' },   match: (p) => p === '/' },
  { num: '02', label: '作品',   to: '/works',                             match: (p) => p === '/works' },
  { num: '03', label: '关于',   to: { pathname: '/', hash: '#about' },  match: (p) => false },
  { num: '04', label: '联系',   to: { pathname: '/', hash: '#contact' }, match: (p) => false }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label="何青松 首页">
          <span className="nav__brand-cn">何青松</span>
          <span className="nav__brand-en">HE QINGSONG</span>
        </Link>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive || l.match(pathname) ? 'is-active' : ''}`}
              style={({ isActive }) => (isActive || l.match(pathname)) ? { color: 'var(--text)' } : undefined}
            >
              <span className="num">{l.num}</span>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__right">
          <span className="nav__status">
            <span className="nav__dot" />
            AVAILABLE / 2026
          </span>
        </div>
      </div>
    </header>
  )
}
