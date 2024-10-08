import { useCallback, useEffect, useRef, useState } from 'react'
import { HEADER_HEIGHT } from 'consts'

import { throttle } from 'utils'

const useHeaderScroll = () => {
  const prevScroll = useRef(0)
  const [headerState, setHeaderState] = useState<string | null>(null)

  const handleScroll = useCallback(
    throttle(() => {
      const currScroll = window.scrollY
      if (currScroll <= HEADER_HEIGHT) {
        setHeaderState(null)
      } else if (prevScroll.current > currScroll) {
        setHeaderState('show')
      } else if (prevScroll.current < currScroll) {
        setHeaderState('hide')
      }
      prevScroll.current = currScroll
    }),
    [],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      prevScroll.current = window.scrollY
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return headerState
}

export default useHeaderScroll
