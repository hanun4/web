import { useMemo, useState } from 'react'
import { CATEGORIES, WORKS } from '../data/works.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Works() {
  const ref = useReveal()
  const [active, setActive] = useState('all')

  const list = useMemo(() => {
    if (active === 'all') return WORKS
    return WORKS.filter((w) => w.category === active)
  }, [active])

  return (
    <section id="works" className="section" ref={ref}>
      <div className="container">
        {/* 区块头 */}
        <header className="section-head reveal">
          <span className="section-head__index">02</span>
          <h2 className="section-head__title">作品 · Works</h2>
          <span className="section-head__rule" />
          <span className="section-head__en">SELECTED PROJECTS</span>
        </header>

        {/* 说明：本区作用 —— 展示三维与 AI 影视方向代表作 */}
        <p className="reveal" style={{ maxWidth: 640, color: 'var(--text-dim)', marginBottom: 'clamp(32px, 4vw, 48px)', lineHeight: 1.8 }}>
          精选三维资产、角色、场景的代表性项目。
          覆盖建模、贴图、动画、渲染全流程。
        </p>

        {/* 分类筛选 */}
        <div className="works__filters reveal">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`filter-btn ${active === c.key ? 'is-active' : ''}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 作品网格 */}
        <div className="works-grid">
          {list.map((w, i) => (
            <article
              key={w.id}
              className={`work-card ${i === 0 ? 'feature' : 'wide'} reveal`}
            >
              <span className="work-card__index">{w.index}</span>
              <img className="work-card__img" src={w.cover} alt={w.title} loading="lazy" />
              <span className="work-card__corner" aria-hidden="true">
                {/* 右上箭头 */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="work-card__overlay">
                <span className="work-card__cat">{w.categoryLabel} · {w.year}</span>
                <h3 className="work-card__title">{w.title}</h3>
                <p className="work-card__summary">{w.summary}</p>
                <div className="work-card__meta">
                  <span>{w.role}</span>
                  <span className="sep">/</span>
                  <span>{w.titleEn}</span>
                </div>
              </div>
            </article>
          ))}

          {/* 末位 CTA 卡片，用于补齐网格并提供入口 */}
          <a href="#contact" className="work-card wide reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <div style={{ textAlign: 'center', padding: 24 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: 12 }}>
                VIEW ALL
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>
                查看完整作品集
              </div>
              <div style={{ marginTop: 16, color: 'var(--text-muted)', fontSize: 13 }}>
                更多项目请通过下方联系方式获取 →
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
