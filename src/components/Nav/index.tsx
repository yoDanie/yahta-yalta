import cn from 'classnames'

import { Link } from 'components'

import styles from './index.module.scss'

type NavProps = {
  className?: string
}

const links = [
  { text: 'Яхты', href: '/#boats' },
  // { text: 'Яхты', href: '/#boats' },
  // { text: 'Яхты', href: '/#boats' },
  // { text: 'Яхты', href: '/#boats' },
]

export const Nav = ({ className }: NavProps) => (
  <nav className={cn(styles.root, className)}>
    {links.map(({ href, text }, index) => (
      <Link key={index} href={href}>
        {text}
      </Link>
    ))}
  </nav>
)
