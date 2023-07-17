import { useEffect, useState } from 'react'
import type { MutableRefObject } from 'react'

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  { threshold = 0, root = null, rootMargin = '0%', ...options }: IntersectionObserverInit = {},
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      setIsIntersecting(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold, root, rootMargin, ...options },
    )

    const element = ref.current

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, threshold, root, rootMargin, options])

  return isIntersecting
}
