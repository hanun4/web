import { useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * 作品卡片点击放大预览 · Lightbox
 *
 * 用法：
 *   const [open, setOpen] = useState(false);
 *   const [i, setI] = useState(0);
 *   <Lightbox
 *     open={open}
 *     work={list[i]}
 *     list={list}
 *     onClose={() => setOpen(false)}
 *     onPrev={() => setI((x) => (x - 1 + list.length) % list.length)}
 *     onNext={() => setI((x) => (x + 1) % list.length)}
 *   />
 *
 * 交互：
 * - ESC / 点击遮罩 / 点 × ：关闭
 * - ← / 上一张按钮 ：上一张（循环）
 * - → / 下一张按钮 ：下一张（循环）
 * - 打开时 body 锁定滚动
 */
export default function Lightbox({ open, work, list, onClose, onPrev, onNext }) {
  const total = list?.length || 0
  const idx = list && work ? list.findIndex((w) => w?.id === work?.id) : -1

  // 键盘 + 锁滚
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev?.()
      else if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose, onPrev, onNext])

  if (!open || !work) return null

  return createPortal(
    <div className="lb" role="dialog" aria-modal="true" aria-label={work.title}>
      {/* 遮罩：点击关闭 */}
      <div className="lb__backdrop" onClick={onClose} aria-hidden="true" />

      {/* 左上角：计数器 */}
      <div className="lb__counter" aria-label="当前索引">
        <span className="lb__counter-cur">{String(idx + 1).padStart(2, '0')}</span>
        <span className="lb__counter-sep">/</span>
        <span className="lb__counter-total">{String(total).padStart(2, '0')}</span>
      </div>

      {/* 右上角：关闭 */}
      <button
        className="lb__btn lb__btn--close"
        onClick={onClose}
        aria-label="关闭预览 (ESC)"
        title="关闭 (ESC)"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* 左：上一张 */}
      {total > 1 && (
        <button
          className="lb__btn lb__btn--nav lb__btn--prev"
          onClick={(e) => { e.stopPropagation(); onPrev?.() }}
          aria-label="上一张 (←)"
          title="上一张 (←)"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* 右：下一张 */}
      {total > 1 && (
        <button
          className="lb__btn lb__btn--nav lb__btn--next"
          onClick={(e) => { e.stopPropagation(); onNext?.() }}
          aria-label="下一张 (→)"
          title="下一张 (→)"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* 内容容器 */}
      <div className="lb__inner" onClick={(e) => e.stopPropagation()}>
        <div className="lb__image-wrap">
          <img
            className="lb__image"
            src={work.cover}
            alt={work.title}
            draggable={false}
          />
        </div>

        <div className="lb__info">
          <div className="lb__info-top">
            <span className="lb__cat">
              {work.categoryLabel} · {work.year}
              <span className="lb__sep">/</span>
              <span style={{ color: 'var(--text-muted)' }}>{work.titleEn}</span>
            </span>
            <h3 className="lb__title">{work.title}</h3>
          </div>
          <p className="lb__summary">{work.summary}</p>
          <div className="lb__role"><span>{work.role}</span></div>
        </div>
      </div>
    </div>,
    document.body
  )
}
