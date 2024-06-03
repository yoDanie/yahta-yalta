import type { ReactNode } from 'react'

import { Header, Image } from 'components'

import styles from './index.module.scss'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  // useSmoothScroll() // not working

  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
