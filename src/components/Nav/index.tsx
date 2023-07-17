import cn from 'classnames'

import styles from './index.module.css'

type NavProps = {
  className?: string
}

export const Nav = ({ className }: NavProps) => (
  <nav className={cn(styles.root, className)}>
    <li className="nav__item">
      <a href="../yachts.html" className="nav__link">
        Яхты
      </a>
    </li>
    <li className="nav__item">
      <a href="../photos.html" className="nav__link">
        Фото
      </a>
    </li>
    <li className="nav__item">
      <a href="../watch.html" className="nav__link">
        Видео
      </a>
    </li>
    <li className="nav__item">
      <a href="../contacts.html" className="nav__link">
        Контакты
      </a>
    </li>
  </nav>
)
