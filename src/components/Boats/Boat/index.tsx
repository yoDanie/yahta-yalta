import { boatIconMapping, boatTypeMapping } from 'consts'
import { getBoatData } from 'getBoatData'
import Link from 'next/link'

import { BoatClauseMapping, Image } from 'components'
import { capitalize, formatPrice } from 'utils'

import styles from './index.module.scss'

type BoatProps = {
  boatName: string
}

export const Boat = ({ boatName }: BoatProps) => {
  const { data, mainImage } = getBoatData(boatName)

  const { name, capacity, slug, type, price } = data

  const clauseMapping = [
    { key: 'Тип', value: boatTypeMapping[type], icon: boatIconMapping.type },
    { key: 'Вместимость', value: `${capacity} человек`, icon: boatIconMapping.capacity },
    {
      key: 'Цена',
      value: formatPrice(price),
      icon: boatIconMapping.price,
    },
  ]

  return (
    <Link href={`/boat/${name}`} className={styles.root}>
      <div className={styles.name}>{capitalize(slug)}</div>
      <Image
        containerClassname={styles.cont}
        loading="lazy"
        className={styles.photo}
        src={mainImage.default}
        alt="sdf"
      />

      <BoatClauseMapping clauseMapping={clauseMapping} />
    </Link>
  )
}
