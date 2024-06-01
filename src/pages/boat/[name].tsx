import { Image, Layout, Link } from 'components'
import { useBoatData } from 'hooks'

import styles from './index.module.scss'

export const BoatPage = () => {
  const {
    data: { slug, name },
    images,
  } = useBoatData()

  return (
    <Layout>
      <div className={styles.showcase}>
        <h1 className={styles.title}>{slug}</h1>
        <Link href={`/boat/${name}/gallery`}>gallery</Link>
        <Image src={images[0]} alt={`Заглавное фото яхты ${slug}`} />
      </div>

      <div className={styles.brief}>Современная, комфортная и романтичная яхта</div>
    </Layout>
  )
}

export default BoatPage
