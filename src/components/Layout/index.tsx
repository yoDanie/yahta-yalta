import type { ReactNode } from 'react'

import { Header } from 'components'

import styles from './index.module.scss'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.root}>
    <Header />
    <main>{children}</main>
    {/* <Footer /> */}
  </div>
)
