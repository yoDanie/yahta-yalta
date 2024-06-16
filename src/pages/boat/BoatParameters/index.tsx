import { boatTypeMapping } from 'consts'

import { BoatClauseMapping } from 'components'
import { formatPrice } from 'utils'
import type { BoatData } from 'types'

import styles from './index.module.scss'

export const BoatParameters = (boatData: BoatData) => {
  const { price, type, capacity, length, width, cabins, sleeps } = boatData

  const clauseMapping = [
    { key: 'Тип', value: boatTypeMapping[type] },
    { key: 'Вмещает', value: capacity ? `до ${capacity} человек` : null },
    { key: 'Длина', value: length ? `${length} м` : null },
    { key: 'Ширина', value: width ? `${width} м` : null },
    { key: 'Кают', value: cabins },
    { key: 'Спальных мест', value: sleeps },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.price}>{formatPrice(price)}</div>
      <BoatClauseMapping theme="dark" clauseMapping={clauseMapping} />
    </div>
  )
}
