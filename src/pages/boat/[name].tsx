import { useRouter } from 'next/router'

export const BoatPage = () => {
  const router = useRouter()
  return <div style={{}}>{router.query.slug}</div>
}

export default BoatPage
