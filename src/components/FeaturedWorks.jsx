import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WORKS } from '../data/works.js'
import { useReveal } from '../hooks/useReveal.js'
import Lightbox from './Lightbox.jsx'

/**
 * 首页精选作品：4 张作品卡 + 入口 CTA 跳 /works
 * 点击任意作品卡 → 放大预览（Lightbox）
 */
const ZOOM_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M11 11L8.2 8.2M5.5 4V7M4 5.5H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FeaturedWorks() {
  const ref = useReveal()
  const featured = WORKS.slice(0, 4)
  const [lbIdx, setLbIdx] = useState(null)

  const open = lbIdx != null
  const work = open ? featured[lbIdx] : null
  const n = featured.length

  return (
    <section id="featured" className="section" ref={ref}>
      <div className="container">
        <header className="section-head">
          <span className="section-head__index reveal--fade">02</span>
          <h2 className="section-head__title reveal--mask">精选作品 · Selected</h2>
          <span className="section-head__rule reveal--line" />
          <span className="section-head__en reveal--fade">FEATURED WORKS · 2024 — 2026</span>
        </header>

        <p className="reveal--fade" style={{ maxWidth: 640, color: 'var(--text-dim)', marginBottom: 'clamp(32px, 4vw, 48px)', lineHeight: 1.8 }}>
          四个精选项目，涵盖渲染、产品视觉。
          完整作品集请前往「作品」页。
        </p>

        <div className="works-grid reveal-stagger">
          {featured.map((w, i) => (
            <article
              key={w.id}
              className={`work-card ${i === 0 ? 'feature' : 'wide'} reveal--card`}
              onClick={() => setLbIdx(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLbIdx(i); } }}
              aria-label={`放大预览：${w.title}`}
            >
              <span className="work-card__zoom" aria-hidden="true">{ZOOM_ICON}</span>
              <span className="work-card__index">{w.index}</span>
              <img className="work-card__img reveal--img" src={w.cover} alt={w.title} loading="lazy" />
              <span className="work-card__corner" aria-hidden="true">
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

          {/* 跳转到完整作品集的 CTA 卡片 */}
          <Link to="/works" className="work-card wide reveal--card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div style={{ textAlign: 'center', padding: 24 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: 12 }}>
                GO TO / WORKS
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>
                浏览完整作品集
              </div>
              <div style={{ marginTop: 16, color: 'var(--text-muted)', fontSize: 13 }}>
                所有分类 · 共 {WORKS.length}+ 个项目 →
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Lightbox
        open={open}
        work={work}
        list={featured}
        onClose={() => setLbIdx(null)}
        onPrev={() => setLbIdx((x) => (x - 1 + n) % n)}
        onNext={() => setLbIdx((x) => (x + 1) % n)}
      />
    </section>
  )
}
