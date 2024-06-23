import logo from 'icons/yahta-logo.svg'

import { Image } from 'components'

import styles from './index.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.rights}>
        Яхта-Ялта (c) 2021-{new Date().getFullYear()} Все права защищены.
      </div>
      <div>
        Разработка сайта:
        <a href="https://telegram.me/Danielyalta" target="_blank" className={styles.creator}>
          Даниил
        </a>
      </div>

      <div className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
        <Image src={logo} alt="лого яхта-ялта" />
      </div>
    </footer>
  )
}
