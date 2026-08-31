import { useState, useEffect, useMemo, useRef } from 'react'
import { useTransition, animated } from '@react-spring/web'
import './Masonry.css'

/**
 * Masonry — 改自 React Bits（github.com/DavidHDev/react-bits）
 * 响应式列数 + react-spring 动画重排。改造点：接受 renderItem(item, style, animated)
 * 以渲染任意 children（默认渲染 backgroundImage 兜底）。
 *
 * data: [{ id, height, ... }]  height 为卡片目标高度（px），内部按 height/2 布局
 * renderItem: (item, style, Animated) => ReactNode  自定义渲染每个 cell
 */
function Masonry({ data, renderItem }) {
  const [columns, setColumns] = useState(3)
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  // 缓存每张图片的真实宽高比（naturalWidth/naturalHeight）
  // —— key: item.id, value: aspect ratio (w/h)，未加载前用 height 字段推导兼底
  const aspectsRef = useRef({})
  const [, force] = useState(0)

  // 响应式列数
  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1200px)').matches) setColumns(3)
      else if (window.matchMedia('(min-width: 640px)').matches) setColumns(2)
      else setColumns(1)
    }
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  // 监听容器宽度
  useEffect(() => {
    const handleResize = () => { if (ref.current) setWidth(ref.current.offsetWidth) }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ref])

  // 预加载每张图片拿真实宽高比，加载完缓存并重渲染
  useEffect(() => {
    data.forEach((item) => {
      if (aspectsRef.current[item.id] || !item.cover) return
      const img = new Image()
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          aspectsRef.current[item.id] = img.naturalWidth / img.naturalHeight
          force((x) => x + 1)
        }
      }
      img.src = item.cover
    })
  }, [data])

  const [heights, gridItems] = useMemo(() => {
    const cellWidth = width / columns
    const h = new Array(columns).fill(0)
    const items = data.map((child) => {
      // 优先用真实宽高比；未加载时用 height 字段兼底（height字段原本是 2× cellHeight，这里反推）
      const aspect = aspectsRef.current[child.id] || (child.height ? 1 / (child.height / 2 / cellWidth) : 0.66)
      const cellHeight = cellWidth / aspect
      const column = h.indexOf(Math.min(...h))
      const x = cellWidth * column
      const y = (h[column] += cellHeight) - cellHeight
      return { ...child, x, y, width: cellWidth, height: cellHeight }
    })
    return [h, items]
  }, [columns, data, width])

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  return (
    <div ref={ref} className='masonry' style={{ height: Math.max(...heights, 0) }}>
      {transitions((style, item) =>
        renderItem ? (
          renderItem(item, style, animated)
        ) : (
          <animated.div key={item.id} style={style}>
            <div
              style={{
                backgroundColor: 'var(--surface)',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </animated.div>
        )
      )}
    </div>
  )
}

export default Masonry
