import { Boats, Layout } from 'components'

import { DefaultMetaHead } from '../../pageComponents/DefaultMetaHead'
import { Cards } from '../../pageComponents/home/Cards'
import { Intro } from '../../pageComponents/home/Intro'

export const HomePage = () => (
  <>
    <DefaultMetaHead />

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
