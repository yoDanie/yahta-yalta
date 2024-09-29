import Head from 'next/head'

type DefaultMetaHeadProps = {
  title?: string
}

export const DefaultMetaHead = ({ title }: DefaultMetaHeadProps) => {
  const targetTitle = title || 'Яхта-Ялта - аренда яхты и катера в Ялте, морские прогулки'

  return (
    <Head>
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />

      <title>{targetTitle}</title>
      <meta property="og:title" content={targetTitle} />

      <meta
        name="description"
        content="Аренда яхты и катера в Ялте, с капитаном. От 5 000 руб/в час. Морские прогулки к замку Ласточкино гнездо, Медведь-горе... Рыбалка и готовка яхте. Морские экскурсии"
      />
      <meta
        property="og:description"
        content="Морская прогулка в Ялте. Морская прогулка к Ласточкино гнездо. Аренда яхты в Ялте. Аренда катера Ялта. Прогулка на яхте"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/gallery/gallery-16.jpg" />

      <meta
        name="keywords"
        content="прогулки на яхте, прогулки на катере, морская прогулка ялта, морские прогулки, ялта, яхта, катер, аренда, морское путешествие, экскурсия, рыбалка, прогулка на яхте, снять яхту, аренда яхты с капитаном, аренда, заказать яхту, морская экскурсия ласточкино гнездо, ласточка, гнездо, гнездышко, гурзуф яхта, медведь гора яхта"
      />
    </Head>
  )
}
