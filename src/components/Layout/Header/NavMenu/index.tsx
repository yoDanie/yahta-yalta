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
  return (
    <>
      <Burger />

      <nav className={cn(styles.root, className)}>
        {links.map(({ href, text }, index) => (
          <Link key={index} href={href}>
            {text}
          </Link>
        ))}
      </nav>
    </>
  )
}
