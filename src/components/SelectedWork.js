import SanityImageURLBuilder from "@sanity/image-url";
import { useMemo, useState } from "react";
import Work from "./Work";

const imgBuilder = SanityImageURLBuilder({
  projectId: "xeyhewdq",
  dataset: "production",
});

export const SelectedWork = ({ work }) => {
  const [mappedWork, setMappedWork] = useState([]);

  useMemo(() => {
    if (work?.length) {
      const sortedWork = [...work].sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );

      const mappedWork = sortedWork.map((item) => ({
        ...item,
        mainImage: imgBuilder.image(item.mainImage),
        imagesGallery: item.imagesGallery.map((img) => imgBuilder.image(img)),
      }));

      setMappedWork(mappedWork);
    } else {
      setMappedWork([]);
    }
  }, [work]);

  return (
    <section className="selected-work">
      <div className="sw-header">
        <h3 className="sw-title">Selected Work</h3>
        <p className="sw-count">&#91;5&#93;</p>
      </div>

      <div className="sw-content">
        <Work mappedWork={mappedWork} />
      </div>
    </section>
  );
};

export default SelectedWork;
