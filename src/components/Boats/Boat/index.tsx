import Link from 'next/link'

import { Image } from 'components'
import { capitalize } from 'utils'

import styles from './index.module.css'

const boatMapping = {
  sailing: 'парусно-моторная',
  motor: 'моторная',
  catamaran: 'катамаран',
}

type BoatProps = {
  image: any
  boatData: BoatData
}

export const Boat = ({ image, boatData: { name, slug, type, capacity, price } }: BoatProps) => (
  <Link href={`/boat/${name}`} className={styles.boat}>
    <div className={styles.name}>{capitalize(slug)}</div>
    <Image className={styles.photo} src={image} alt="sdf" />
    <div className={styles.info}>
      <div className={styles.clause}>
        <div className={styles.key}>Тип</div>
        <div className={styles.value}>{boatMapping[type]}</div>
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
