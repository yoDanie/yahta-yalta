import { useState, useEffect } from 'react'
import { throttle } from '@/utils'
import { HEADER_HEIGHT } from '@/constants'

const useHeaderScroll = () => {
  let prevScroll = window.scrollY
  const [headerState, setHeaderState] = useState<string | null>(null)

  const handleScroll = () => {
    const currScroll = window.scrollY
    if (currScroll <= HEADER_HEIGHT) {
      setHeaderState(null)
      prevScroll = currScroll
      return
    } else if (prevScroll > currScroll) {
      setHeaderState('show')
    } else if (prevScroll < currScroll) {
      setHeaderState('hide')
    }
    prevScroll = currScroll
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll), { passive: true })
    return () => {
      window.removeEventListener('scroll', throttle(handleScroll), {
        // passive: true,
      })
    }
  }, [])
  return headerState
}

export default useHeaderScroll
