import { CONTACTS, PROFILE } from '../data/profile.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Footer() {
  const ref = useReveal()
  const email = CONTACTS.find((c) => c.label === 'Email')

  return (
    <footer id="contact" className="footer" ref={ref}>
      <div className="container">
        <div className="footer__top reveal">
          <div>
            <div className="footer__cta-label">04 / CONTACT — 合作邀约</div>
            <h2 className="footer__cta">
              有项目想聊聊？
              <br />
              <a href={email?.href}>{email?.value}</a>
            </h2>
          </div>

          <div className="footer__contacts">
            {CONTACTS.map((c) => (
              <div className="contact-item" key={c.label}>
                <div className="l">{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <div className="v">{c.value}</div>
                  </a>
                ) : (
                  <div className="v">{c.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 巨型描边字，做底纹 */}
        <div className="footer__wordmark reveal" aria-hidden="true">
          HE QINGSONG
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {PROFILE.nameEn} · ALL RIGHTS RESERVED</span>
          <span>BUILT WITH REACT + VITE · DARK MODE</span>
        </div>
      </div>
    </footer>
  )
}
