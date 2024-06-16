import telegram from 'icons/telegram.svg'
import viber from 'icons/viber.svg'
import whatsapp from 'icons/whatsapp.svg'

import { Image, Section } from 'components'

import styles from './index.module.scss'

type ContactsProps = {
  title: string
}

const chatsMapping = [
  { href: 'https://telegram.me/RodionYalta', src: telegram, alt: 'телеграм контакт' },
  {
    href: 'https://api.whatsapp.com/send/?phone=79781000171',
    src: whatsapp,
    alt: 'ватсап контакт',
  },
  { href: 'viber://chat?number=%2B79781000171', src: viber, alt: 'вайбер контакт' },
]

export const Contacts = () => {
  return (
    <>
      <div className={styles.root}>
        {chatsMapping.map(({ alt, href, src }, index) => (
          <a key={index} href={href} className={styles.icon} target="_blank">
            <Image src={src} alt={alt} />
          </a>
        ))}
      </div>

      <div className={styles.contacts}>
        <div>Родион:</div>
        <a className={styles.phone} href="tel:+79781000171">
          +7 (978) 100-01-71
        </a>
      </div>
    </>
  )
}
