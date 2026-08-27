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

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        setColumns(3)
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setColumns(2)
      } else {
        setColumns(1)
      }
    }
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) setWidth(ref.current.offsetWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ref])

  const [heights, gridItems] = useMemo(() => {
    const h = new Array(columns).fill(0)
    const items = data.map((child) => {
      const column = h.indexOf(Math.min(...h))
      const x = (width / columns) * column
      const y = (h[column] += child.height / 2) - child.height / 2
      return { ...child, x, y, width: width / columns, height: child.height / 2 }
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
