import { useRef } from 'react'
import cn from 'classnames'
import anchorImage from 'icons/sea-anchor.png'

import { Button, Divider, Image } from 'components'
import { useIntersectionObserver } from 'hooks'

import styles from './index.module.scss'
import bgImage from './intro-1.jpg'

export const Intro = () => {
  const bottomElementRef = useRef(null)

  const isBottomElementVisible = useIntersectionObserver(bottomElementRef, { rootMargin: '-18px' })

  return (
    <>
      <div className={styles.root}>
        <Image
          priority
          placeholder="blur"
          src={bgImage}
          alt="Интро картинка - аренда яхт и катеров в Ялте"
        />
        <Image
          priority
          className={cn(styles.anchor, isBottomElementVisible && styles.animated)}
          src={anchorImage}
          alt="Якорь"
        />
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div>
              <h1 className={styles.title}>Аренда яхты в Ялте</h1>
              <h2 className={styles.slogan}>
                Совершите настоящее
                <p>морское путешествие!</p>
              </h2>
            </div>

            <h3 className={styles.subtitle}>
              Покупайтесь на диких пляжах или в открытом, чистом море. Полюбуйтесь самыми красивыми
              местами Ялты из яхты, совершая морскую прогулку к замку Ласточкино гнездо, скалам
              Адалары, Медведь-горе, скале Дива...
            </h3>
            {/* <Button className={styles.button}>Заказать яхту</Button> */}
          </div>
        </div>
      </div>

      <div ref={bottomElementRef}></div>
    </>
  )
}
