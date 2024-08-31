import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useEscapeKey = () => {
  const router = useRouter()
  const boatName = router.query.name as string

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push(`/boat/${boatName}`)
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [boatName])
}
