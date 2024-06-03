import { boatTypeMapping } from 'consts'

import { BoatClauseMapping } from 'components'
import type { BoatData } from 'types'

import styles from './index.module.scss'

export const BoatParameters = (boatData: BoatData) => {
  const { price, type, capacity, length, width, cabins, sleeps } = boatData

  const clauseMapping = [
    { key: 'Тип', value: boatTypeMapping[type] },
    { key: 'Вмещает', value: `до ${capacity} человек` },
    { key: 'Длина', value: `${length} м` },
    { key: 'Ширина', value: `${width} м` },
    { key: 'Кают', value: `${cabins}` },
    { key: 'Спальных мест', value: `${sleeps}` },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.price}>от {price.toLocaleString('ru-RU')} руб/час</div>
      <BoatClauseMapping theme="dark" clauseMapping={clauseMapping} />
    </div>
  )
}
