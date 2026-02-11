import { useEffect, useMemo, useRef, useState } from 'react'

export function useReveal({ rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        }
      },
      { root: null, threshold: 0.12, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin])

  return { ref, isVisible }
}

export function Reveal({ children, className = '', delayMs = 0 }) {
  const { ref, isVisible } = useReveal()
  const style = useMemo(
    () => ({ transitionDelay: delayMs ? `${delayMs}ms` : undefined }),
    [delayMs],
  )

  return (
    <div
      ref={ref}
      style={style}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
