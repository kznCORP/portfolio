import { useCallback, useMemo, useState } from "react";
import SanityImageURLBuilder from "@sanity/image-url";

import Header from "../../src/components/Header";
import OtherProjects from "../../src/components/OtherProjects";
import Footer from "../../src/components/Footer";
import ProjectCard from "../../src/components/ProjectCard";

const imgBuilder = SanityImageURLBuilder({
  projectId: "xeyhewdq",
  dataset: "production",
});

const Portfolio = ({ currentWork, otherWork }) => {
  const [currentProject, setCurrentProject] = useState([]);
  const [otherProject, setOtherProject] = useState([]);

  const memoizedSetCurrentProject = useCallback(
    (projects) =>
      setCurrentProject(
        projects.map((project) => ({
          ...project,
          mainImage: imgBuilder.image(project.mainImage),
          imagesGallery: project.imagesGallery.map((img) =>
            imgBuilder.image(img)
          ),
        }))
      ),
    []
  );

  const memoizedSetOtherProject = useCallback(
    (projects) =>
      setOtherProject(
        projects.map((project) => ({
          ...project,
          mainImage: imgBuilder.image(project.mainImage),
          imagesGallery: project.imagesGallery.map((img) =>
            imgBuilder.image(img)
          ),
        }))
      ),
    []
  );

  useMemo(() => {
    if (currentWork?.length && otherWork?.length) {
      memoizedSetCurrentProject(currentWork);
      memoizedSetOtherProject(otherWork);
    } else {
      setCurrentProject([]);
      setOtherProject([]);
    }
  }, [
    currentWork,
    memoizedSetCurrentProject,
    memoizedSetOtherProject,
    otherWork,
  ]);

  return (
    <>
      <Header />
      <section className="portfolio">
        {currentProject?.length &&
          currentProject.map((current) => (
            <ProjectCard project={current} key={current._id} />
          ))}
      </section>
      <OtherProjects projects={otherProject} />
      <Footer />
    </>
  );
};

export default Portfolio;

export const getServerSideProps = async (pageContext) => {
  const portfolioSlug = pageContext.query.slug;

  // 404 page
  if (!portfolioSlug) {
    return {
      notFound: true,
    };
  }

  const currWorkQuery = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${portfolioSlug}" ]`
  );
  const otherWorkQuery = encodeURIComponent(
    `*[ _type == "post" && slug.current != "${portfolioSlug}" ]`
  );

  const currWorkURL = `https://xeyhewdq.api.sanity.io/v1/data/query/production?query=${currWorkQuery}`;
  const otherWorkURL = `https://xeyhewdq.api.sanity.io/v1/data/query/production?query=${otherWorkQuery}`;

  const [currWorkRes, otherWorkRes] = await Promise.all([
    fetch(currWorkURL).then((res) => res.json()),
    fetch(otherWorkURL).then((res) => res.json()),
  ]);

  const currentWork = currWorkRes?.result;
  const otherWork = otherWorkRes?.result;

  return {
    props: {
      currentWork,
      otherWork,
    },
  };
};
