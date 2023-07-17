import type { ReactNode } from 'react'
import styles from './index.module.css'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.root}>{children}</div>
)
