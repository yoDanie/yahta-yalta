import { boatIconMapping, boatTypeMapping } from 'consts'
import Link from 'next/link'

import { BoatClauseMapping, Image } from 'components'
import { useBoatData } from 'hooks'
import { capitalize, formatPrice } from 'utils'

import styles from './index.module.scss'

type BoatProps = {
  boatName: string
}

export const Boat = ({ boatName }: BoatProps) => {
  const { data, mainImage } = useBoatData(boatName)
  if (!data) return null

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
      <Image loading="lazy" className={styles.photo} src={mainImage} alt="sdf" />

      <BoatClauseMapping clauseMapping={clauseMapping} />
    </Link>
  )
}
