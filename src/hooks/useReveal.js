import { useEffect, useRef } from 'react'

/**
 * 滚动入场动效 hook
 * 监听元素进入视口，添加 is-in 类名触发 CSS 过渡
 * @returns {React.RefObject} 绑定到目标容器的 ref
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // 不支持 IntersectionObserver 时直接显示，保证可用性
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-in')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options }
    )

    io.observe(node)
    return () => io.disconnect()
  }, [options])

  return ref
}
