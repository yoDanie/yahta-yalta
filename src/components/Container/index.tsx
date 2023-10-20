import type { ReactNode } from 'react'

import styles from './index.module.scss'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.root}>{children}</div>
)
