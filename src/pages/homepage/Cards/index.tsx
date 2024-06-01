import { Button, Image, Section } from 'components'

import cardImage1 from './cards-1.jpg'
import cardImage2 from './cards-2.jpg'
import cardImage3 from './cards-3.jpg'
import bgImage from './cards-bg-2.jpg'
import styles from './index.module.scss'
import polaroidImage from './polaroid.png'

const Card = ({ src, alt, caption }: any) => (
  <div className={styles.card}>
    <Image src={src} className={styles.photo} alt={alt} />
    <div className={styles.caption}>{caption}</div>
  </div>
)

export const Cards = () => (
  <Section className={styles.root} title="Наполните жизнь приятными моментами...">
    <Image
      quality={50}
      className={styles.bgImage}
      placeholder="blur"
      src={bgImage}
      alt="фоновая картинка"
    />
    <div className={styles.cards}>
      <Card src={cardImage1} alt="Скала парус - Крым, Ялта" caption="Любуемся скалой 'Парус'" />
      <Card
        src={cardImage2}
        alt="Замок Ласточкино Гнездо - Крым, Ялта"
        caption="Замок 'Ласточкино Гнездо'"
      />
      <Card
        src={cardImage3}
        alt="Гриль на яхте, готовка рыбы на яхте"
        caption="Готовим свежевыловленную рыбу на гриле &#128523;"
      />
    </div>
    <div className={styles.callToAction}>
      <div className={styles.wrapper}>
        <span className={styles.text}>
          Почему бы и Вам не наполнить свою жизнь прекрасными моментами?
        </span>
        <Button theme="light">Бронировать яхту</Button>
      </div>
      <Image className={styles.polaroid} src={polaroidImage} alt="Ваше polaroid-фото" />
    </div>
  </Section>
)
