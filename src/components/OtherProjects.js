import Image from "next/image";
import Link from "next/link";

const OtherProjects = ({ projects }) => {
  return (
    <section className="other-projects">
      <div className="other-header">
        <p className="pf-grey">Explore</p>
        <p>Other Projects</p>
      </div>

      <div className="opf-gallery">
        {projects?.length &&
          projects.map((project) => (
            <Link href={project.slug.current} key={project._id}>
              <div className="opf-img-wrapper">
                <Image
                  src={project.mainImage.url()}
                  alt={`${project.title} image`}
                  width={350}
                  height={350}
                  loading="lazy"
                  className="opf-image"
                />
                <p className="opf-title"> {project.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default OtherProjects;
