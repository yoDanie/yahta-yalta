import { useEffect, useState } from 'react'
import { getBoatData } from 'getBoatData'
import CloseIcon from 'icons/cross.svg'
import { useRouter } from 'next/router'
import { Controller, FreeMode, Keyboard, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { GetBoadDataReturn } from 'getBoatData'
import type { GetStaticProps } from 'next'

import { Image, Link } from 'components'

import styles from './index.module.scss'
import { useEscapeKey } from '../../../pageComponents/boat/useEscapeKey'

const modEnabled = {
  enabled: true,
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export const getStaticProps = (async (context) => ({
  props: { ...getBoatData(context.params?.name! as string) },
})) satisfies GetStaticProps<GetBoadDataReturn>

export const GalleryPage = ({ data, images }: GetBoadDataReturn) => {
  const router = useRouter()
  const { initialSlide = 0 } = router?.query

  useEscapeKey()

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [thumbsSliderPerView, setThumbsSliderPerView] = useState(3)

  useEffect(() => {
    const getThumbsSliderPerView = () => {
      const breakpoints = {
        small: window.matchMedia('(max-width: 600px)'),
        medium: window.matchMedia('(min-width: 601px) and (max-width: 1024px)'),
        large: window.matchMedia('(min-width: 1025px) and (max-width: 1440px)'),
        extraLarge: window.matchMedia('(min-width: 1441px)'),
      }

      if (breakpoints.small.matches) {
        return 3
      } else if (breakpoints.medium.matches) {
        return 4
      } else if (breakpoints.large.matches) {
        return 5
      } else if (breakpoints.extraLarge.matches) {
        return 6
      }

      return 3
    }

    // Only run on client side
    if (typeof window !== 'undefined') {
      setThumbsSliderPerView(getThumbsSliderPerView())
    }
  }, [])

  return (
    <div className={styles.root}>
      <Link href={`/boat/${data?.name}`} className={styles.close}>
        <Image placeholder="empty" src={CloseIcon} alt="закрыть" />
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
            <SwiperSlide key={src.default}>
              <Image
                priority
                className={styles.img}
                key={index}
                src={src.default}
                alt={`Заглавное фото ${data?.slug}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.thumbsContainer}>
        <Swiper
          spaceBetween={10}
          slidesPerView={thumbsSliderPerView}
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesProgress
          className={styles.swiper}
        >
          {images.map((src) => (
            <SwiperSlide key={src.default}>
              <Image
                src={src.default}
                alt={`Фото-миниатюра ${data?.slug}`}
                containerClassname={styles.thumb}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default GalleryPage
