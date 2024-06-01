import { boatTypeMapping } from 'consts'
import Link from 'next/link'
import { BoatName } from 'types'

import { Image } from 'components'
import { useBoatData } from 'hooks'
import { capitalize } from 'utils'

import styles from './index.module.scss'

type BoatProps = {
  boatName: BoatName
}

export const Boat = ({ boatName }: BoatProps) => {
  const {
    data: { name, capacity, slug, type, price },
    mainImage,
  } = useBoatData(boatName)

  const clauseMapping = [
    { key: 'Тип', value: boatTypeMapping[type] },
    { key: 'Вместимость', value: `${capacity} человек` },
    { key: 'Цена', value: `${price.toLocaleString('ru-RU')} руб/час` },
  ]

  return (
    <Link href={`/boat/${name}`} className={styles.root}>
      <div className={styles.name}>{capitalize(slug)}</div>
      <Image className={styles.photo} src={mainImage} alt="sdf" />
      <div className={styles.info}>
        {clauseMapping.map(({ key, value }) => (
          <div className={styles.clause}>
            <div className={styles.key}>{key}</div>
            <div className={styles.value}>{value}</div>
          </div>
        ))}
      </div>
    </Link>
  )
}
