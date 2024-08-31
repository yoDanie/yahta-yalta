import { useState } from 'react'
import cn from 'classnames'
import logo from 'icons/yahta-logo.svg'
import Image from 'next/image'

import { Link, Messengers } from 'components'

import styles from './index.module.scss'
import { MessengersBtn } from './MessengersBtn'
import { NavMenu } from './NavMenu'
import useHeaderScroll from './useHeaderScroll'

export const Header = () => {
  // const burgerHandler = () => {
  //   setMessengersActive(false)
  //   setBurgerActive(prev => !prev)
  // }

  const headerState = useHeaderScroll()

  return (
    <header
      className={cn(
        styles.root,
        headerState === 'hide' && styles.hide,
        headerState === 'show' && styles.show,
      )}
    >
      <MessengersBtn />

      <NavMenu />

      <div className={styles.info}>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.title}>
            Яхта-ялта
          </Link>
          <div className={styles.subtitle}>Аренда яхт и катеров в Ялте</div>
        </div>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="лого яхта-ялта" />
        </Link>
      </div>
    </header>
  )
}
