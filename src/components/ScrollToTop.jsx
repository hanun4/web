import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 每次路由变化后：
 * 1) 如果 location.hash 存在，滚动到对应 id
 * 2) 否则回到顶部
 * 注意：useEffect 需要在 DOM 挂载后才执行，所以放在 BrowserRouter 内部顶层即可
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // 给组件/内容一点时间挂载（特别是带条件的内容）
    const id = hash.replace('#', '')

    const run = () => {
      if (id) {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    const t = setTimeout(run, 80)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
