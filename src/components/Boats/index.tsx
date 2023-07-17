import { useState } from 'react'
import { boatsData } from 'data'
import * as boatsImages from 'images'

import { Section } from 'components'

import { Boat } from './Boat'
import styles from './index.module.css'

export const Boats = () => {
  const [filters, setFilters] = useState(null)

  console.log(boatsData)

  return (
    <Section className={styles.root} title="Яхты и катера">
      {/* <h2>filters</h2> */}
      <div className={styles.boats}>
        {boatsData.map((boatData) => {
          const thumbnail = boatsImages[boatData.name][0]
          return <Boat key={boatData.name} image={thumbnail} boatData={boatData} />
        })}
      </div>
    </Section>
  )
}
