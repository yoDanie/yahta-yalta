import { boatsData } from 'data'
import { useRouter } from 'next/router'

import styles from './index.module.scss'

export const BoatPage = () => {
  const router = useRouter()
  const boatName = router.query.name

  const boatData = boatsData.find(({ name }) => name === boatName)

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.photo}>main + 3 photos</div>
        <div className={styles.info}>
          <div className={styles.title}>{boatName}</div>
          <div className={styles.specs}>main specs</div>
        </div>
      </div>
    </div>
  )
}

export default BoatPage
