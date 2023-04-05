import React, { useRef, useEffect } from "react";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const ProjectCard = ({ project }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const images = gallery.querySelectorAll(".pf-img-wrapper");

    const handleScroll = () => {
      const lastImage = images[images.length - 1];
      const rect = lastImage.getBoundingClientRect();

      if (rect.top <= window.innerHeight) {
        projectHeader.classList.remove("sticky");
      } else {
        projectHeader.classList.add("sticky");
      }
    };

    const projectHeader = document.querySelector(".pf-project");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [project]);

  return (
    <div key={project._id} className="project-card">
      <div className="pf-mobile">
        <div className="pf-img-wrapper">
          <Image
            src={project.mainImage.url()}
            alt={`${project.title} image`}
            width={1500}
            height={1500}
            loading="lazy"
            className="pf-image"
          />
        </div>
      </div>

      <div className="pf-project">
        <div className="pf-header">
          <h2 className="pf-name">{project.title}</h2>
          <p className="pf-ig">@{project.instagram}</p>
        </div>

        <div className="pf-info">
          <p className="pf-grey">Project Details</p>
          <PortableText value={project.body} />
          <div className="pf-more">
            <div className="roles">
              <p className="pf-grey">Roles</p>
              {project.roles.map((role, id) => (
                <p key={id}>{role}</p>
              ))}
            </div>

            <div className="tools">
              <p className="pf-grey">Tools</p>
              {project.tools.map((tool, id) => (
                <p key={id}>{tool}</p>
              ))}
            </div>
          </div>

          <Link href={project.url} target="_blank">
            <p className="pf-visit">{`Visit ${project.title} →`}</p>
          </Link>
        </div>
      </div>

      <div className="pf-gallery" ref={galleryRef}>
        <div className="img-gallery pf-desktop">
          <div className="pf-img-wrapper">
            <Image
              src={project.mainImage.url()}
              alt={`${project.title} image`}
              width={1500}
              height={1500}
              loading="lazy"
              className="pf-image"
            />
          </div>

          <div className="pf-img-alt">
            <p>Homepage, responsive</p>
          </div>
        </div>

        {project.imagesGallery?.length &&
          project.imagesGallery.map((img) => (
            <div className="img-gallery" key={uuidv4()}>
              <div className="pf-img-wrapper">
                <Image
                  src={img.url()}
                  alt={`${img.title} image`}
                  width={1500}
                  height={1500}
                  loading="lazy"
                  className="pf-image"
                />
              </div>

              <div className="pf-img-alt">
                <p>{img.options.source.alt}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
