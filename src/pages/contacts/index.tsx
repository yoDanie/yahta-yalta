import Head from 'next/head'

import { Contacts, Layout } from 'components'

import styles from './index.module.scss'
import { DefaultMetaHead } from '../DefaultMetaHead'

export const ContactsPage = () => {
  return (
    <>
      <DefaultMetaHead />
      <Head>
        <title>Контакты | Яхта-Ялта</title>
      </Head>

      <Layout>
        <div className={styles.root}>
          <Contacts />
        </div>
      </Layout>
    </>
  )
}

export default ContactsPage
