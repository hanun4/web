import { useHeroMotion } from '../hooks/useMotion.js'

/**
 * Hero 首屏排版（参考品牌理念首屏风格）
 *  —— 四象限 + 散点布局，高级极简杂志感
 *  左上：品牌联名标识       右上：迷你导航
 *  左中：自由 / FREEDOM     中中：未来 / FUTURE      右中：符号 / SYMBOL
 *  左-80px 圆徽：R          右下：EST / 日期 / 条码
 *  左下：副标签 + 中文"作品集" + 超大英文 PORTFOLIO
 */
export default function Hero() {
  const ref = useHeroMotion()

  return (
    <section id="hero" className="hero" ref={ref}>
      <span className="hero__bg m-hero-bg" />
      <span className="hero__glow" data-parallax="0.18" />

      {/* 圆形 R 徽标（叠加在视觉主体中间，自由定位） */}
      <div className="hero__seal m-seal" aria-hidden="true">R</div>

      <div className="hero__grid">
        {/* ——— 左上：品牌联名 ——— */}
        <div className="hero__brand m-brand">
          <span className="hero__brand-square" aria-hidden="true" />
          何青松 · 三维设计师 <span className="sep"></span>
        </div>

        {/* ——— 右上：迷你导航 ——— */}
        <nav className="hero__topnav m-topnav">
          <a href="#featured">WORKS</a>
          <a href="#about">PROFILE</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* ——— 中部三列：自由 / 未来 / 符号 ——— */}
        <div className="hero__kw hero__kw--freedom m-kw">
          <span className="hero__kw-zh">审美</span>
          <span className="hero__kw-slash">/</span>
          <span className="hero__kw-en">Sense of beauty</span>
        </div>
        <div className="hero__kw hero__kw--future m-kw">
          <span className="hero__kw-zh">技术</span>
          <span className="hero__kw-slash">/</span>
          <span className="hero__kw-en">Skill</span>
        </div>
        <div className="hero__kw hero__kw--symbol m-kw">
          <span className="hero__kw-zh">专注</span>
          <span className="hero__kw-slash">/</span>
          <span className="hero__kw-en">Focus</span>
        </div>

        {/* ——— 左下：标题主视觉 ——— */}
        <div className="hero__titleblock m-titleblock">
          <span className="hero__subtitle-tag">【 HQS / PORTFOLIO 】</span>
          <div className="hero__title-row">
            <div className="hero__title-cn">
              <div className="zh-line-1">作品集</div>
            </div>
            <div className="hero__title-en">PORTFOLIO</div>
          </div>
        </div>

        {/* ——— 右下：EST + 日期 + 条码 ——— */}
        <div className="hero__meta-r m-metar">
          <div className="hero__estrow">
            <span className="est">EST 2017</span>
            <span className="date">2025 / 12 / 06</span>
          </div>
          {/* 纯装饰条码（用 div 方块拼，不依赖字体） */}
          <div className="hero__barcode" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
      </div>

      {/* 底部滚动提示（左下角独立） */}
      <div className="hero__scroll m-scroll">
        <span className="hero__scroll-line" />
        SCROLL TO EXPLORE
      </div>
    </section>
  )
}
