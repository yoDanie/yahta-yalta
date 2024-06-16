import { boatsNames } from 'consts'

import { Section } from 'components'
import type { BoatName } from 'types'

import { Boat } from './Boat'
import styles from './index.module.scss'

type BoatsProps = {
  title?: string
  currentBoat?: BoatName
}

export const Boats = ({ title = 'Яхты и катера', currentBoat }: BoatsProps) => {
  // const [filters, setFilters] = useState(null)

  const filteredBoatNames = boatsNames.filter((name) => name !== currentBoat)

  return (
    <Section className={styles.root} title={title}>
      {/* <h2>filters</h2> */}

      <div className={styles.boats} id="boats">
        {filteredBoatNames.map((boatName, index) => {
          return <Boat key={index} boatName={boatName} />
        })}
      </div>
    </Section>
  )
}
