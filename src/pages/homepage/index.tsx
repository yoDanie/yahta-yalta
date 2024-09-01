import Head from 'next/head'

import { Boats, Contacts, Layout, Section } from 'components'

import { About } from './About'
import { Cards } from './Cards'
import { Intro } from './Intro'
import { Reviews } from './Reviews'
import { DefaultMetaHead } from '../DefaultMetaHead'

export const HomePage = () => (
  <>
    <DefaultMetaHead />
    <Head>
      <title>Яхта-Ялта | Аренда яхты, катера в Ялте.</title>
    </Head>

    <Layout>
      <Intro />
      <Cards />
      <Boats />
      {/* <Section title="Контакты">
        <Contacts />
      </Section> */}
      {/* <Reviews /> */}
    </Layout>
  </>
)

export default HomePage
