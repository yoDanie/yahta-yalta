import { Button, Image, Section } from 'components'

import cardImage1 from './cards-1.jpg'
import cardImage2 from './cards-2.jpg'
import cardImage3 from './cards-3.jpg'
import bgImage from './cards-bg-2.jpg'
import styles from './index.module.scss'
import polaroidImage from './polaroid.png'

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
      <div className={styles.card}>
        <Image src={cardImage1} className={styles.photo} alt="Скала парус - Крым, Ялта" />
        <div className={styles.caption}>Любуемся скалой "Парус"</div>
      </div>
      <div className={styles.card}>
        <Image
          src={cardImage2}
          className={styles.photo}
          alt="Замок Ласточкино Гнездо - Крым, Ялта"
        />
        <div className={styles.caption}>Замок "Ласточкино Гнездо"</div>
      </div>
      <div className={styles.card}>
        <Image
          src={cardImage3}
          className={styles.photo}
          alt="Гриль на яхте, готовка рыбы на яхте"
        />
        <div className={styles.caption}>Готовим свежевыловленную рыбу на гриле &#128523;</div>
      </div>
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
