import { useState } from 'react'
import cn from 'classnames'

import { Link } from 'components'

import { Burger } from './Burger'
import styles from './index.module.scss'

type NavProps = {
  className?: string
}

const links = [
  { text: 'Яхты', href: '/#boats' },
  { text: 'Контакты', href: '/contacts' },
]

export const NavMenu = ({ className }: NavProps) => {
  const [isOpened, setOpened] = useState(false)

  const toggleMenu = () => {
    setOpened((state) => !state)
  }

  return (
    <>
      <Burger isOpened={isOpened} toggleMenu={toggleMenu} />

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
