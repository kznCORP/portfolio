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
      <div className="pf-project">
        <div className="pf-header">
          <p className="pf-grey">Project Name</p>
          <h2 className="pf-name">{project.title}</h2>
          <p className="pf-ig">@{project.instagram}</p>
        </div>

        <div className="pf-info">
          <p className="pf-grey">Project Details</p>
          <PortableText value={project.body} />
          <div className="pf-more">
            <div className="tools">
              <p className="pf-grey">Tools</p>
              {project.tools.map((tool) => (
                <p key={tool._id}>{tool}</p>
              ))}
            </div>

            <div className="roles">
              <p className="pf-grey">Roles</p>
              {project.roles.map((role) => (
                <p key={role._id}>{role}</p>
              ))}
            </div>
          </div>

          <Link href={project.url} target="_blank">
            <p className="pf-visit">{`Visit ${project.title} →`}</p>
          </Link>
        </div>
      </div>

      <div className="pf-gallery" ref={galleryRef}>
        <div className="pf-img-wrapper">
          <Image
            src={project.mainImage.url()}
            alt={`${project.title} image`}
            width={250}
            height={250}
            loading="lazy"
            className="pf-image"
          />
        </div>

        {project.imagesGallery?.length &&
          project.imagesGallery.map((img) => (
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
      </div>
    </div>
  );
};

export default ProjectCard;
