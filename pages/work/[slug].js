import { useCallback, useMemo, useState } from "react";
import SanityImageURLBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import Header from "../../src/components/Header";
import OtherProjects from "../../src/components/OtherProjects";
import Footer from "../../src/components/Footer";

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
          currentProject.map((curr) => (
            <>
              <div key={curr._id} className="pf-project">
                <div className="pf-header">
                  <p className="pf-grey">Project Name</p>
                  <h2 className="pf-name">{curr.title}</h2>
                  <p className="pf-ig">@{curr.instagram}</p>
                </div>

                <div className="pf-info">
                  <p className="pf-grey">Project Details</p>
                  <PortableText value={curr.body} />
                  <div className="pf-more">
                    <div className="tools">
                      <p className="pf-grey">Tools</p>
                      {curr.tools.map((tool) => (
                        <p key={tool._id}>{tool}</p>
                      ))}
                    </div>

                    <div className="roles">
                      <p className="pf-grey">Roles</p>
                      {curr.roles.map((role) => (
                        <p key={role._id}>{role}</p>
                      ))}
                    </div>
                  </div>

                  <p className="pf-visit">{`Visit ${curr.title}`}</p>
                </div>
              </div>

              <div className="pf-img-wrapper">
                <Image
                  src={curr.mainImage.url()}
                  alt={`${curr.title} image`}
                  width={250}
                  height={250}
                  loading="lazy"
                  className="pf-image"
                />
              </div>

              {curr.imagesGallery?.length &&
                curr.imagesGallery.map((img) => (
                  <div className="pf-img-wrapper" key={uuidv4()}>
                    <Image
                      src={img.url()}
                      alt={`${img.title} image`}
                      height={250}
                      width={250}
                      loading="lazy"
                      className="pf-image"
                    />
                  </div>
                ))}
            </>
          ))}

        <OtherProjects projects={otherProject} />
      </section>
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
