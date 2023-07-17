import cn from 'classnames'
import anchorIcon from 'icons/anchor.svg'
import Image from 'next/image'

import styles from './index.module.css'

type MessengersProps = {
  className?: string
}

export const Messengers = ({ className }: MessengersProps) => (
  <div className={className}>
    <a
      // className={styles.link}
      href="https://telegram.me/Danielyalta"
      // href="https://api.whatsapp.com/send/?phone=79780183060"
      // href="viber://chat?number=%2B79780183060"
      target="_blank"
      rel="noreferrer"
    >
      <Image width={40} height={40} priority src={anchorIcon} alt="telegram icon" />
    </a>
  </div>
)

export default Messengers
