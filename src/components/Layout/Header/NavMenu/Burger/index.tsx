import { useState } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

type BurgerProps = {
  isOpened: boolean
  toggleMenu: () => void
}

export const Burger = ({ isOpened, toggleMenu }: BurgerProps) => {
  return (
    <button className={cn(styles.root, isOpened && styles.opened)} onClick={toggleMenu}>
      <div className={cn(styles.item)} />
      <div className={cn(styles.item)} />
      <div className={cn(styles.item)} />
    </button>
  )
}
