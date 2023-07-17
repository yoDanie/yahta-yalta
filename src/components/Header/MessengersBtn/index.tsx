import { useState } from 'react'
import cn from 'classnames'

import styles from './index.module.css'

type MessengersBtnProps = {
  // isActive: boolean
}

export const MessengersBtn = ({}: MessengersBtnProps) => {
  const [messengersActive, setMessengersActive] = useState(false)
  const [burgerActive, setBurgerActive] = useState(false)

  // const headerState = useHeaderScroll()

  const showMessengers = () => {
    setBurgerActive(false)
    setMessengersActive((prev) => !prev)
  }

  return (
    <div className={styles.root}>
      <button onClick={showMessengers} className={styles.btn} type="button" />
      {/* <div
        className={cn(
          styles.headerMessengers,
          messengersActive && styles.messengersActive
        )}
      >
      </div> */}
    </div>
  )
}
