import { Analytics } from "@vercel/analytics/react";

import Meta from "../src/components/Meta";
import Header from "../src/components/Header";
import Intro from "../src/components/Intro";
import SelectedWork from "../src/components/SelectedWork";
import Footer from "../src/components/Footer";

const Home = ({ work }) => {
  return (
    <>
      <Meta description="A collection of work, past and present. Some built for today, for tomorrow, and others for the future." />
      <Header />
      <Intro />
      <SelectedWork work={work} />
      <Footer />
      <Analytics />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const queryURL = `https://xeyhewdq.api.sanity.io/v1/data/query/production?query=${query}`;

  const [queryData] = await Promise.all([
    fetch(queryURL).then((res) => res.json()),
  ]);

  const work = queryData.result;

  return {
    props: {
      work,
    },
  };
};
