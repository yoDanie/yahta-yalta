import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image, Section } from 'components'

import { reviewsImages } from './images'
import styles from './index.module.scss'

export const Reviews = () => {
  return (
    <Section title={<>Спасибо Вам &#129505;</>}>
      <div>
        <Swiper
          loop
          navigation
          freeMode={{ enabled: true }}
          spaceBetween={20}
          slidesPerView={3}
          modules={[Navigation, FreeMode]}
        >
          {reviewsImages.map((src, index) => (
            <SwiperSlide key={src.src}>
              <Image key={index} src={src} alt={`отзыв`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}
