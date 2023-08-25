import { useLayoutEffect, useRef, useState } from 'react'

import { throttle } from 'utils'

const HEADER_HEIGHT = 80

export const useHeaderScroll = () => {
  const prevScroll = useRef(0)
  const [headerState, setHeaderState] = useState<string | null>(null)

  const handleScroll = () => {
    const currScroll = window.scrollY
    if (currScroll <= HEADER_HEIGHT) {
      setHeaderState(null)
    } else {
      setHeaderState(prevScroll.current > currScroll ? 'visible' : 'hidden')
    }
    prevScroll.current = currScroll
  }

  useLayoutEffect(() => {
    const throttledScroll = throttle(handleScroll)
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  return headerState
}
