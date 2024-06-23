import CloseIcon from 'icons/cross.svg'
import { useRouter } from 'next/router'
import { Controller, FreeMode, Keyboard, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperClass } from 'swiper/react'

import { Image, Link } from 'components'
import { useBoatData } from 'hooks'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { useEffect, useState } from 'react'

import styles from './index.module.scss'
import { useEscapeKey } from './useEscapeKey'

const modEnabled = {
  enabled: true,
}

export const GalleryPage = () => {
  const { data, images } = useBoatData()

  const router = useRouter()
  const { initialSlide = 0 } = router?.query

  useEscapeKey(data?.name)

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  if (!images) return null

  return (
    <div className={styles.root}>
      <Link href={`/boat/${data?.name}`} className={styles.close}>
        <Image src={CloseIcon} alt="закрыть" />
      </Link>

      <div className={styles.mainContainer}>
        <Swiper
          loop
          navigation
          initialSlide={Number(initialSlide)}
          className={styles.swiper}
          scrollbar={modEnabled}
          keyboard={modEnabled}
          slidesPerView={1}
          {...(thumbsSwiper && { thumbs: { swiper: thumbsSwiper } })}
          modules={[Navigation, Controller, Thumbs, Keyboard, FreeMode]}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src.src}>
              <Image
                priority
                className={styles.img}
                key={index}
                src={src}
                alt={`Заглавное фото яхты `}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.thumbsContainer}>
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesProgress
          className={styles.swiper}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src.src}>
              <Image src={src} alt={`Thumbnail ${index}`} containerClassname={styles.thumb} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default GalleryPage
