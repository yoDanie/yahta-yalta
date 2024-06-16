import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Boats, Contacts, Image, Layout } from 'components'
import { useBoatData } from 'hooks'
import { capitalize } from 'utils'

import { BoatParameters } from './BoatParameters'
import styles from './index.module.scss'

export const BoatPage = () => {
  const { data, images, mainImage } = useBoatData()
  const router = useRouter()
  if (!data) return null

  const { slug, name, description } = data
  const thumbs = images.slice(1, 4)

  const handleClick = (e: any, index = 0) => {
    e.preventDefault()
    router.push(
      { pathname: `/boat/${name}/gallery`, query: { initialSlide: index } },
      `/boat/${name}/gallery`,
    )
  }

  return (
    <Layout>
      <div className={styles.showcase}>
        <div className={styles.photos}>
          <Link
            onClick={(e) => handleClick(e)}
            className={cn(styles.mainImage, styles.hoverable)}
            href={`/boat/${name}/gallery`}
          >
            <Image src={mainImage} alt={`Заглавное фото яхты ${slug}`} />
          </Link>
          <div className={styles.thumbs}>
            {thumbs.map((src, index) => (
              <Link
                onClick={(e) => handleClick(e, index + 1)}
                className={cn(styles.thumb, styles.hoverable)}
                key={index}
                href={`/boat/${name}/gallery`}
              >
                <Image src={src} alt={`Фото яхты ${slug}`} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.about}>
          <h1 className={styles.title}>{capitalize(slug)}</h1>
          <BoatParameters {...data} />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.order}>
          <div className={styles.subtitle}>Забронировать</div>
          <Contacts />
        </div>
        <div className={styles.description}>
          <div className={styles.subtitle}>Описание</div>
          <div className={styles.descriptionText}>{description}</div>
        </div>
      </div>
      <Boats title="Другие яхты" currentBoat={name} />
    </Layout>
  )
}

export default BoatPage
