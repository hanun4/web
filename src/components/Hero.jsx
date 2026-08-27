import { useHeroMotion } from '../hooks/useMotion.js'

export default function Hero() {
  const ref = useHeroMotion()

  return (
    <section id="hero" className="hero" ref={ref}>
      <span className="hero__bg m-hero-bg" />
      <span className="hero__glow" data-parallax="0.18" />

      <div className="container hero__inner" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* 顶部 meta 信息条 —— 体现科技感 */}
        <div className="hero__meta m-meta">
          <span>
            PORTFOLIO <span className="sep">/</span> 2025 — 2026
          </span>
          <span>
            31.23°N 121.47°E <span className="sep">/</span> SHANGHAI
          </span>
        </div>

        <div className="hero__body">
          <span className="hero__tag m-tag">3D DESIGNER · AI FILM</span>
          <h1 className="hero__title m-title">
            何青松
            <span className="en">HE QINGSONG</span>
          </h1>
          <p className="hero__sub m-sub">
            三维设计师，专注 <strong>汽车渲染</strong> 与 <strong>动态视觉</strong> 方向。
            以扎实的技术，把抽象概念落成可被感知的画面。
          </p>
        </div>

        <div className="hero__footer">
          <div className="hero__scroll m-scroll">
            <span className="hero__scroll-line" />
            SCROLL TO EXPLORE
          </div>
          <div className="hero__role-list m-role">
            <span>3D ASSETS</span>
            <span>VIRTUAL PRODUCTION</span>
            <span>AI · FILM</span>
          </div>
        </div>
      </div>
    </section>
  )
}
