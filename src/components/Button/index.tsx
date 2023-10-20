import cn from 'classnames'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import styles from './index.module.scss'

type ButtonProps = {
  className?: string
  style?: CSSProperties
  children: ReactNode
  theme?: 'light' | 'blue'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  children,
  style,
  theme = 'blue',
  ...otherProps
}: ButtonProps) => (
  <button
    className={cn(styles.root, theme === 'light' && styles.lightButton, className)}
    style={style}
    {...otherProps}
  >
    {children}
  </button>
)
