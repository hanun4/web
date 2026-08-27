import { useRef } from 'react'
import './SpotlightCard.css'

/**
 * SpotlightCard — 来自 React Bits（github.com/DavidHDev/react-bits）
 * 鼠标跟随径向光斑悬停效果，纯 CSS + onMouseMove，无第三方依赖。
 * 包装任意 children，给作品卡片增加克制的科技感高光。
 */
const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(201, 168, 106, 0.22)' }) => {
  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    divRef.current.style.setProperty('--mouse-x', `${x}px`)
    divRef.current.style.setProperty('--mouse-y', `${y}px`)
    divRef.current.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  )
}

export default SpotlightCard
