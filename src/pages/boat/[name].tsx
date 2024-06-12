import cn from 'classnames'

import { Contacts, Image, Layout, Link } from 'components'
import { useBoatData } from 'hooks'
import { capitalize } from 'utils'

import { BoatParameters } from './BoatParameters'
import styles from './index.module.scss'

export const BoatPage = () => {
  const { data, images, mainImage } = useBoatData()
  if (!data) return null

  const { slug, name, description } = data

  const thumbs = images.slice(1, 4)

  return (
    <Layout>
      <div className={styles.showcase}>
        <div className={styles.photos}>
          <Link className={cn(styles.mainImage, styles.hoverable)} href={`/boat/${name}/gallery`}>
            <Image src={mainImage} alt={`Заглавное фото яхты ${slug}`} />
          </Link>
          <div className={styles.thumbs}>
            {thumbs.map((src, index) => (
              <Link
                className={cn(styles.thumb, styles.hoverable)}
                key={index}
                href={`/boat/${name}/gallery`}
              >
                <Image src={src} alt={`Заглавное фото яхты ${slug}`} />
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
    </Layout>
  )
}

export default BoatPage
