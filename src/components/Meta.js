import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="utf-8" />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Jericho Fillon | Web Developer',
  keywords: 'web development, web developer, web design, UI/UX designer',
  description: 'A multidisciplinary Designer + Developer focusing on helping brands, products and people make a mark.'
}

export default Meta;
