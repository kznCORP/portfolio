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
                  width={1500}
                  height={1500}
                  loading="lazy"
                  className="work-image"
                />
                <h2 className="work-title">
                  {work.title}
                  <span>
                    <p className="work-count">
                      &#91;{work.imagesGallery.length + 1}&#93;
                    </p>
                  </span>
                </h2>
              </div>
            </Link>
            {/* End of Main Image */}
          </div>
        ))}
    </>
  );
};

export default Work;
