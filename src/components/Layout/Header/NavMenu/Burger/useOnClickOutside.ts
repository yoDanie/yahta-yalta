import { useEffect } from 'react'

type useOnClickOutsideParams = {
  ref: any
  callback: any
}

export const useOnClickOutside = ({ ref, callback }: useOnClickOutsideParams) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
