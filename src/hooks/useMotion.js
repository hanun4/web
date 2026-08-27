import { useEffect, useLayoutEffect, useRef } from 'react'

const prefersReduced = () =>
  typeof matchMedia !== 'undefined' &&
  matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Hero 首屏 opening 动效
 * 容器挂载后下一帧加 .is-ready，触发 motion.css 中的 keyframes 编排
 * @returns {React.RefObject} 绑定到 <section className="hero">
 */
export function useHeroMotion() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return
    if (prefersReduced()) {
      node.classList.add('is-ready')
      return
    }
    // 下一帧触发，确保 CSS 初始态先生效（避免 FOUC）
    const id = requestAnimationFrame(() => node.classList.add('is-ready'))
    return () => {
      cancelAnimationFrame(id)
      node.classList.remove('is-ready')
    }
  }, [])

  return ref
}

/**
 * 全局 Parallax（替代 ScrollTrigger scrub）
 * 扫描 [data-parallax] 元素，滚动时按速度系数做轻微 y 位移
 * @param {unknown} dep 路由变化依赖，切换页面时重新扫描
 */
export function useParallax(dep) {
  useEffect(() => {
    if (prefersReduced()) return
    const els = Array.from(document.querySelectorAll('[data-parallax]'))
    if (!els.length) return

    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      for (const el of els) {
        const r = el.getBoundingClientRect()
        if (r.bottom < -200 || r.top > vh + 200) continue
        const speed = Number(el.dataset.parallax) || 0.12
        // 元素中心相对视口中心的偏移 × 速度
        const offset = (r.top + r.height / 2 - vh / 2) * speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // 首次延迟一帧，等布局稳定
    raf = requestAnimationFrame(update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      els.forEach((el) => { el.style.transform = '' })
    }
  }, [dep])
}
