import telegram from 'icons/telegram.svg'
import viber from 'icons/viber.svg'
import whatsapp from 'icons/whatsapp.svg'

import { Image } from 'components'
import { capitalize } from 'utils'

import styles from './index.module.scss'

type ContactsProps = {
  boatData?: BoatData
}

export const Contacts = ({ boatData }: ContactsProps) => {
  const space = '%20'
  const text = boatData
    ? `Здравствуйте!${space}Желаю${space}забронировать${space}${
        boatData.type === 'catamaran' ? 'катамаран' : 'яхту'
      }${space}${capitalize(boatData.slug)}`
    : ''

  const chats = [
    {
      href: `https://t.me/RodionYalta?text=${text}`,
      src: telegram,
      alt: 'телеграм контакт',
    },
    {
      href: `https://wa.me/79781000171?text=${text}`,
      src: whatsapp,
      alt: 'ватсап контакт',
    },
    { href: `viber://chat?number=79781000171&text=${text}`, src: viber, alt: 'вайбер контакт' },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.chats}>
        {chats.map(({ alt, href, src }, index) => (
          <a key={index} href={href} className={styles.icon} target="_blank">
            <Image placeholder="empty" src={src} alt={alt} />
          </a>
        ))}
      </div>

      <div className={styles.contacts}>
        <div>Родион:</div>
        <a className={styles.phone} href="tel:+79781000171">
          +7 (978) 100-01-71
        </a>
      </div>
    </div>
  )
}
