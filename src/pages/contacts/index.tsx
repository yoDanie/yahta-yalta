import { Contacts, Layout } from 'components'

import styles from './index.module.scss'

export const ContactsPage = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <Contacts />
      </div>
    </Layout>
  )
}

export default ContactsPage
