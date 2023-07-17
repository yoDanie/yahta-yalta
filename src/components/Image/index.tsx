import cn from 'classnames'
import NextImage from 'next/image'
import type { ImageProps as NextImageProps } from 'next/image'

import styles from './index.module.css'

type ImageProps = {
  className?: string
} & NextImageProps

export const Image = ({ className, ...otherProps }: ImageProps) => (
  <NextImage className={cn(styles.root, className)} {...otherProps}></NextImage>
)
