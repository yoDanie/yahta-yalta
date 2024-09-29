import { Contacts, Layout } from 'components'

import styles from './index.module.scss'
import { DefaultMetaHead } from '../../pageComponents/DefaultMetaHead'

export const ContactsPage = () => {
  return (
    <>
      <DefaultMetaHead title="Контакты | Яхта-Ялта" />

      <Layout>
        <div className={styles.root}>
          <Contacts />
        </div>
      </Layout>
    </>
  )
}

export default ContactsPage
