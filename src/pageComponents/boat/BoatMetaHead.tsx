import { baseURL, boatTypeMapping, dashChar } from 'consts'
import Head from 'next/head'

import { useBoatData } from 'hooks'
import { capitalize } from 'utils'

const keywordsMapping = {
  sailing: 'парусная яхта в ялте, парусник ялта, прогулка под парусом,',
  motor: 'моторная яхта в ялте, рыбалка с катера',
  catamaran: 'катамаран ялта, яхта-катамаран',
}

export const BoatMetaHead = () => {
  const {
    data: { name, slug, type },
    mainImage,
  } = useBoatData()

  const textAddition = type === 'catamaran' ? '' : 'яхта'

  const titleMainPart = `${capitalize(slug)} ${dashChar} ${boatTypeMapping[type]} ${textAddition}`

  const description = `${capitalize(boatTypeMapping[type])} ${textAddition} "${capitalize(
    slug,
  )}". Забронировать +7 978-1000-171 | Скидки на аренду светового дня и суток | ${
    type === 'sailing' ? 'Романтическая прогулка под парусом' : 'Рыбалка на яхте'
  }`

  return (
    <Head>
      <title>
        {titleMainPart}. Аренда и морская прогулка на {capitalize(name)} в Ялте
      </title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`яхта ${slug}, яхта
      ${slug} ялта, яхта ${name}, яхта ${name} ялта, ${keywordsMapping[type]}, рыбалка на яхте, морская прогулка, аренды яхты, заказать яхту, снять яхту, прогулки на яхте, прогулки на катере, морская прогулка ялта, морские прогулки, ялта, яхта, катер, аренда, морское путешествие, экскурсия, рыбалка, прогулка на яхте, снять яхту, аренда яхты с капитаном, аренда, заказать яхту, морская экскурсия ласточкино гнездо, ласточка, гнездо, гнездышко, гурзуф яхта, медведь гора яхта`}
      />
      <meta property="og:url" content={`${baseURL}/boat/${name}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${titleMainPart}. Аренда яхты, морская прогулка в Ялте`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`/images/boats/${name}/${mainImage.filePath}`} />
    </Head>
  )
}
