import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 up to `end` once the element scrolls into view.
 * Returns [ref, value].
 */
export default function useCountUp(end, { duration = 2000, start = 0 } = {}) {
  const [value, setValue] = useState(start)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const startTime = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            // easeOutExpo for a premium settle
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setValue(Math.round(start + (end - start) * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration, start])

  return [ref, value]
}
