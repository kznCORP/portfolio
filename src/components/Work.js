import Image from "next/image";
import Link from "next/link";

export const Work = ({ mappedWork }) => {
  return (
    <>
      {mappedWork?.length &&
        mappedWork.map((work) => (
          <div className="work-post" key={work._id}>
            {/* Main Image */}
            <Link href={`/work/${work.slug.current}`} key={work._id}>
              <div className="work-wrapper">
                <Image
                  src={work.mainImage.url()}
                  alt={`${work.title} image`}
                  width={250}
                  height={250}
                  loading="lazy"
                  className="work-image"
                />
                <h2 className="work-title">{work.title}</h2>
              </div>
            </Link>
            {/* End of Main Image */}
          </div>
        ))}
    </>
  );
};

export default Work;
