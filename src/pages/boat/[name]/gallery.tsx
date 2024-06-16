import * as boatsData from 'data'
import CloseIcon from 'icons/cross.svg'
import * as BoatsImages from 'images'
import shit from 'images/maestro/maestro-1.jpg'
import { useRouter } from 'next/router'
import { Keyboard, Lazy, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { Image, Link } from 'components'
import { useBoatData } from 'hooks'
import type { BoatName } from 'types'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import styles from './index.module.scss'

export const GalleryPage = () => {
  const { data, images } = useBoatData()
  if (!data) return null

  const { slug, name } = data

  const router = useRouter()
  const { initialSlide = 0 } = router?.query // Access query parameters

  return (
    <div className={styles.root}>
      <Link href={`/boat/${name}`} className={styles.close}>
        <Image src={CloseIcon} alt="закрыть" />
      </Link>

      <div className={styles.swiperWrapper}>
        <Swiper
          grabCursor
          loop
          navigation
          pagination
          initialSlide={Number(initialSlide)}
          scrollbar={{ enabled: true }}
          spaceBetween={50}
          keyboard={{ enabled: true }}
          // thumbs={{swiper:}}
          slidesPerView={1}
          // onSlideChange={(swiper) => console.log(swiper)}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Thumbs, Keyboard, Scrollbar]}
          className={styles.swiper}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                containerClassname={styles.photo}
                className={styles.img}
                key={index}
                src={src}
                alt={`Заглавное фото яхты `}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default GalleryPage
