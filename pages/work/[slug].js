import { useCallback, useMemo, useState } from "react";
import SanityImageURLBuilder from "@sanity/image-url";

import Header from "../../src/components/Header";
import OtherProjects from "../../src/components/OtherProjects";
import Footer from "../../src/components/Footer";
import ProjectCard from "../../src/components/ProjectCard";

const Portfolio = ({ currentWork, otherWork }) => {
  const [currentProject, setCurrentProject] = useState([]);
  const [otherProject, setOtherProject] = useState([]);

  const memoizedImageBuilder = useMemo(() => {
    return SanityImageURLBuilder({
      projectId: "xeyhewdq",
      dataset: "production",
    });
  }, []);

  const memoizedSetCurrentProject = useCallback(
    (projects) =>
      setCurrentProject(
        projects.map((project) => ({
          ...project,
          mainImage: memoizedImageBuilder.image(project.mainImage),
          imagesGallery: project.imagesGallery.map((img) =>
            memoizedImageBuilder.image(img)
          ),
        }))
      ),
    [memoizedImageBuilder]
  );

  const memoizedSetOtherProject = useCallback(
    (projects) =>
      setOtherProject(
        projects.map((project) => ({
          ...project,
          mainImage: memoizedImageBuilder.image(project.mainImage),
          imagesGallery: project.imagesGallery.map((img) =>
            memoizedImageBuilder.image(img)
          ),
        }))
      ),
    [memoizedImageBuilder]
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

// Fetch all slugs from SanityAPI then pass into getStaticProps.
export const getStaticPaths = async () => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://xeyhewdq.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const paths = result?.result?.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false, // Any non-existing slug return 404 page.
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const currWorkQuery = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${slug}" ]`
  );
  const otherWorkQuery = encodeURIComponent(
    `*[ _type == "post" && slug.current != "${slug}" ]`
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
