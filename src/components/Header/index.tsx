import { useState } from 'react'
import cn from 'classnames'
import logo from 'icons/yahta-logo.svg'
import Image from 'next/image'

import { Messengers, Nav } from 'components'

import { MessengersBtn } from './MessengersBtn'
import styles from './index.module.css'

// import useHeaderScroll from './useHeaderScroll'

export const Header = () => {
  // const burgerHandler = () => {
  //   setMessengersActive(false)
  //   setBurgerActive(prev => !prev)
  // }

  return (
    <header className={styles.root}>
      <MessengersBtn />
      <Nav />
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Яхта-ялта</div>
          <div className={styles.subtitle}>Аренда яхт и катеров в Ялте</div>
        </div>
        <Image className={styles.logo} src={logo} alt="лого яхта-ялта" />
      </div>
    </header>
  )
}
