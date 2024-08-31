import { orderedBoatsData } from 'data'

import { Section } from 'components'

import { Boat } from './Boat'
import styles from './index.module.scss'

type BoatsProps = {
  title?: string
  currentBoat?: string
}

export const Boats = ({ title = 'Яхты и катера', currentBoat }: BoatsProps) => {
  // const [filters, setFilters] = useState(null)

  const filteredBoatsData = orderedBoatsData.filter(({ name }) => name !== currentBoat)

  return (
    <Section className={styles.root} title={title}>
      {/* <h2>filters</h2> */}

      <div className={styles.boats} id="boats">
        {filteredBoatsData.map(({ name }, index) => {
          return <Boat key={index} boatName={name} />
        })}
      </div>
    </Section>
  )
}
