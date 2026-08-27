import Hero from '../components/Hero.jsx'
import FeaturedWorks from '../components/FeaturedWorks.jsx'
import About from '../components/About.jsx'

/**
 * 首页
 * 结构：Hero（全屏首屏） → 精选作品（4 件 + 入口） → About（介绍与经历）
 * 底部联系由全局 Footer 负责（App.jsx 中 Routes 之后）
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWorks />
      <About />
    </>
  )
}
