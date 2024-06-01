import { boatsData } from 'data'
import shit from 'images/maestro/maestro-1.jpg'
import { useRouter } from 'next/router'

import { Header, Image, Layout } from 'components'

import styles from './index.module.scss'

export const BoatPage = () => {
  const router = useRouter()
  const boatName = router.query.name

  const { name, slug, type, capacity } = boatsData.find(({ name }) => name === boatName) || {}

  return (
    <Layout>
      <div className={styles.intro}>
        <div className={styles.preview}></div>
        <Image className={styles.image} src={shit} alt={`Заглавное фото яхты ${slug}`} />
        <div className={styles.brief}>Современная, комфортная и романтичная яхта</div>
        <div className={styles.title}>{slug}</div>
      </div>
    </Layout>
  )
}

export default BoatPage
