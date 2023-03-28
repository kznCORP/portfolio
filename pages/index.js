import Meta from "../src/components/Meta";
import Header from "../src/components/Header";
import Intro from "../src/components/Intro";
import SelectedWork from "../src/components/SelectedWork";
import Footer from "../src/components/Footer";

/*
 * Important
 * [x] Complete About page
 * [x] Create photos and descriptions for each ProjectCard.
 * [ ] Add Metadata (OpenGraph Images and descriptions)
 * [x] Optimize for performance (Caching API calls and CDN for images)
 *
 * Extra
 * [ ] Add GSAP or Framer animations
 * [ ] Dark mode
 *
 */

const Home = ({ work }) => {
  return (
    <>
      <Meta description="A collection of work, past and present. Some built for today, for tomorrow, and others for the future." />
      <Header />
      <Intro />
      <SelectedWork work={work} />
      <Footer />
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
    // revalidate: 1209600 //Cache response for 2 weeks (Replace when production is complete)
    revalidate: 120, // cache the response for 120 seconds
  };
};
