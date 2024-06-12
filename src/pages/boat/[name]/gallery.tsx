import * as boatsData from 'data'
import * as BoatsImages from 'images'
import shit from 'images/maestro/maestro-1.jpg'
import { useRouter } from 'next/router'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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

  return (
    <div className={styles.root}>
      <Link href={`/boat/${name}`}>
        <div className={styles.close}>Close</div>
      </Link>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      {/* {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className={styles.item}>
            <Image key={index} src={src} alt={`Заглавное фото яхты `} />
          </div>
        </SwiperSlide>
      ))} */}
    </div>
  )
}

export default GalleryPage
