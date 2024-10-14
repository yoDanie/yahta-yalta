import cn from 'classnames'
import NextImage from 'next/image'
import type { ImageProps as NextImageProps } from 'next/image'

import styles from './index.module.scss'

type ImageProps = {
  className?: string
  containerClassname?: string
} & NextImageProps

export const Image = ({
  className,
  containerClassname,
  placeholder = 'blur',
  ...otherProps
}: ImageProps) => {
  const image = (
    <NextImage
      placeholder={placeholder}
      blurDataURL={typeof otherProps.src === 'string' ? otherProps.src : undefined}
      className={cn(styles.root, className)}
      {...otherProps}
    />
  )

  return containerClassname ? <div className={containerClassname}>{image}</div> : image
}
