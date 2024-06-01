import { boatsNames } from 'consts'

import { Section } from 'components'

import { Boat } from './Boat'
import styles from './index.module.scss'

export const Boats = () => {
  // const [filters, setFilters] = useState(null)

  return (
    <Section className={styles.root} title="Яхты и катера">
      {/* <h2>filters</h2> */}

      <div className={styles.boats} id="boats">
        {boatsNames.map((boatName, index) => {
          return <Boat key={index} boatName={boatName} />
        })}
      </div>
    </Section>
  )
}
