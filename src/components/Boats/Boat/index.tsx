import Link from 'next/link'

import { Image } from 'components'
import { boatTypeMapping } from 'constants/ui'
import { capitalize } from 'utils'

import styles from './index.module.scss'

type BoatProps = BoatData & {
  image: any
}

export const Boat = ({ image, name, slug, type, capacity, price }: BoatProps) => (
  <Link href={`/boat/${name}`} className={styles.root}>
    <div className={styles.name}>{capitalize(slug)}</div>
    <Image className={styles.photo} src={image} alt="sdf" />
    <div className={styles.info}>
      <div className={styles.clause}>
        <div className={styles.key}>Тип</div>
        <div className={styles.value}>{boatTypeMapping[type]}</div>
      </div>
      <div className={styles.clause}>
        <div className={styles.key}>Вместимость</div>
        <div className={styles.value}>{capacity} человек</div>
      </div>
      <div className={styles.clause}>
        <div className={styles.key}>Цена</div>
        <div className={styles.value}>{price.toLocaleString('ru-RU')} руб/час</div>
      </div>
    </div>
  </Link>
)
