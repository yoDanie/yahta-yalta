import cn from 'classnames'
import type { ReactNode } from 'react'

import { Link } from 'components'

import styles from './index.module.scss'

type NavProps = {
  isOpened: boolean
  className?: string
  burger: ReactNode
}

const links = [
  { text: 'Яхты', href: '/#boats' },
  // { text: 'Контакты', href: '/contacts' },
]

export const NavMenu = ({ className, burger, isOpened }: NavProps) => {
  return (
    <>
      {burger}

      <nav className={cn(styles.root, isOpened && styles.opened, className)}>
        {links.map(({ href, text }, index) => (
          <Link key={index} href={href} className={styles.menuItem}>
            {text}
          </Link>
        ))}
      </nav>
    </>
  )
}
