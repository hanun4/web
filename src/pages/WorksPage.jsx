import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, WORKS } from '../data/works.js'
import { useReveal } from '../hooks/useReveal.js'
import Lightbox from '../components/Lightbox.jsx'
import Masonry from '../components/Masonry.jsx'
import SpotlightCard from '../components/SpotlightCard.jsx'

const ZOOM_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M11 11L8.2 8.2M5.5 4V7M4 5.5H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * 作品集独立页 /works
 */
export default function WorksPage() {
  const ref = useReveal()
  const heroRef = useReveal()
  const [active, setActive] = useState('all')
  const [lbIdx, setLbIdx] = useState(null)

  const list = useMemo(() => {
    if (active === 'all') return WORKS
    return WORKS.filter((w) => w.category === active)
  }, [active])

  // 切换分类时自动关闭 Lightbox，避免越界
  useEffect(() => { setLbIdx(null) }, [active])

  // Masonry 数据：带 _idx 供点击定位回 list
  const masonryData = useMemo(() => list.map((w, i) => ({ ...w, _idx: i })), [list])

  // 基于全量数据做的统计
  const categories = WORKS.reduce((acc, w) => {
    acc[w.category] = (acc[w.category] || 0) + 1
    return acc
  }, {})
  const categoryCount = Object.keys(categories).length
  const years = WORKS.map((w) => Number(w.year.replace(/[^\d]/g, ''))).filter((y) => !Number.isNaN(y))
  const timeRange = years.length ? `${Math.min(...years)} — ${Math.max(...years)}` : ''

  const lbOpen = lbIdx != null
  const lbWork = lbOpen ? list[lbIdx] : null
  const n = list.length

  return (
    <>
      {/* —— 顶部页面 Hero —— */}
      <section className="page-hero" id="works-top" ref={heroRef}>
        <div className="page-hero__bg reveal--img" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb reveal--fade">
            <Link to="/">HOME</Link>
            <span className="breadcrumb__sep">/</span>
            <span className="breadcrumb__cur">WORKS</span>
          </nav>

          <div>
            <div className="page-hero__pre reveal--fade">02 / PORTFOLIO</div>
            <h1 className="page-hero__title reveal--mask">
              作品集
              <span className="en">COMPLETE WORKS · {timeRange}</span>
            </h1>
          </div>

          <p className="page-hero__desc reveal--fade">
            三维设计方向。按分类筛选查阅。
          </p>

          <div className="page-hero__meta reveal--fade">
            <div>
              <div className="k">TOTAL PROJECTS</div>
              <div className="v">{WORKS.length}+</div>
            </div>
            <div>
              <div className="k">CATEGORIES</div>
              <div className="v">{categoryCount}</div>
            </div>
            <div>
              <div className="k">TIME RANGE</div>
              <div className="v">{timeRange}</div>
            </div>
          </div>
        </div>
      </section>

      {/* —— 作品列表区 —— */}
      <section id="works-list" className="section" style={{ paddingTop: 0 }} ref={ref}>
        <div className="container">
          <header className="section-head">
            <span className="section-head__index reveal--fade">02.1</span>
            <h2 className="section-head__title reveal--mask">项目索引 · Index</h2>
            <span className="section-head__rule reveal--line" />
            <span className="section-head__en reveal--fade">BY CATEGORY</span>
          </header>

          <div className="works__filters reveal--fade">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`filter-btn ${active === c.key ? 'is-active' : ''}`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
                {c.key !== 'all' && categories[c.key] ? (
                  <span style={{ marginLeft: 8, opacity: 0.55 }}>· {categories[c.key]}</span>
                ) : null}
                {c.key === 'all' && (
                  <span style={{ marginLeft: 8, opacity: 0.55 }}>· {WORKS.length}</span>
                )}
              </button>
            ))}
          </div>

          <Masonry
            data={masonryData}
            renderItem={(item, style, Animated) => {
              const isVideo = !!item.videoSrc
              return (
                <Animated.div key={item.id} style={style} className="masonry__cell">
                  <SpotlightCard className="work-card-host">
                    <article
                      className={`work-card${isVideo ? ' work-card--video' : ''}`}
                      onClick={isVideo ? undefined : () => setLbIdx(item._idx)}
                      role={isVideo ? undefined : 'button'}
                      tabIndex={isVideo ? -1 : 0}
                      onKeyDown={isVideo ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLbIdx(item._idx); } }}
                      aria-label={isVideo ? undefined : `放大预览：${item.title}`}
                    >
                      <span className="work-card__index">{item.index}</span>
                      {isVideo ? (
                        <iframe
                          className="work-card__video"
                          src={item.videoSrc}
                          scrolling="no"
                          frameBorder="0"
                          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                          allowFullScreen
                          title={item.title}
                        />
                      ) : (
                        <>
                          <span className="work-card__zoom" aria-hidden="true">{ZOOM_ICON}</span>
                          <img className="work-card__img" src={item.cover} alt={item.title} loading="lazy" />
                          <div className="work-card__overlay">
                            <span className="work-card__cat">{item.categoryLabel} · {item.year}</span>
                            <h3 className="work-card__title">{item.title}</h3>
                            <p className="work-card__summary">{item.summary}</p>
                            <div className="work-card__meta">
                              <span>{item.role}</span>
                              <span className="sep">/</span>
                              <span>{item.titleEn}</span>
                            </div>
                          </div>
                        </>
                      )}
                      <span className="work-card__corner" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </article>
                  </SpotlightCard>
                </Animated.div>
              )
            }}
          />

          {/* 结尾 CTA 卡：联系 */}
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="work-card work-card--cta reveal--card"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200, marginTop: 20 }}
          >
            <div style={{ textAlign: 'center', padding: 24 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', marginBottom: 12 }}>
                REQUEST MORE
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>
                获取未公开作品集
              </div>
              <div style={{ marginTop: 16, color: 'var(--text-muted)', fontSize: 13 }}>
                含未发布项目 / 私密商业作品 →
              </div>
            </div>
          </Link>
        </div>
        <Lightbox
          open={lbOpen}
          work={lbWork}
          list={list}
          onClose={() => setLbIdx(null)}
          onPrev={() => setLbIdx((x) => (x - 1 + n) % n)}
          onNext={() => setLbIdx((x) => (x + 1) % n)}
        />
      </section>
    </>
  )
}
