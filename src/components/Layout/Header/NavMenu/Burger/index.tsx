import { useState } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

export const Burger = () => {
  const [isOpened, setOpened] = useState(false)

  const toggleMenu = () => {
    setOpened((state) => !state)
  }

  return (
    <button className={cn(styles.root, isOpened && styles.opened)} onClick={toggleMenu}>
      <div className={cn(styles.item)} />
      <div className={cn(styles.item)} />
      <div className={cn(styles.item)} />
    </button>
  )
}
