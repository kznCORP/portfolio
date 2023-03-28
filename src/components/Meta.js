import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="utf-8" />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta
        property="og:title"
        content="Jericho Fillon | Web Developer & Designer based in Vancouver, B.C."
      />
      <meta property="og:type" content="webpage" />
      <meta property="og:url" content="https://jerichofillon.com/" />
      <meta
        property="og:image"
        content="https://ik.imagekit.io/ricosuave/meta.png?updatedAt=1679990449480"
      />

      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jericho Fillon | Web Developer & Designer based in Vancouver, B.C.",
  keywords: "web development, web developer, web design, UI/UX designer",
  description:
    "A multidisciplinary Designer + Developer focusing on helping brands, products and people stand out in today's competitive market.",
};

export default Meta;
