import cn from 'classnames'
import type { CSSProperties } from 'react'

import styles from './index.module.scss'

type DividerProps = {
  className?: string
  style?: CSSProperties
}

export const Divider = ({ className, style }: DividerProps) => (
  <hr className={cn(styles.root, className)} style={style}></hr>
)
