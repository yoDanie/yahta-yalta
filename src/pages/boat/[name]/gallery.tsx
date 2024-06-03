import * as boatsData from 'data'
import * as BoatsImages from 'images'
import shit from 'images/maestro/maestro-1.jpg'
import { useRouter } from 'next/router'

import { Image } from 'components'
import { useBoatData } from 'hooks'
import type { BoatName } from 'types'

import styles from './index.module.scss'

export const GalleryPage = () => {
  const { data, images } = useBoatData()
  if (!data) return null

  const { slug, name } = data

  return (
    <div className={styles.root}>
      <div className={styles.close}>Close</div>
      {images.map((src: any, index) => (
        <Image key={index} src={src} alt={`Заглавное фото яхты `} />
      ))}
    </div>
  )
}

export default GalleryPage
