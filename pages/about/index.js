import Meta from "../../src/components/Meta";
import Header from "../../src/components/Header";
import Image from "next/image";

import profilePic from "../../src/assets/headshot.png";

const AboutMe = () => {
  return (
    <>
      {/* Meta tags for SEO  */}
      <Meta title="About Me | Jericho Fillon" />
      <Header />
      <section className="about-me">
        <div>
          <h1 className="about-name">Jericho Fillon</h1>
          <h2 className="about-role">
            Web developer based in Vancouver
            <br />I design and build brands, products and software.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-title">Introduction</p>
          <p className="about-desc">
            I&rsquo;m an independent creative developer and digital story—teller
            focused on helping people stand out in today&rsquo;s competitive
            landscape.
            <br />
            <br />
            Wherever possible, I approach every project with attempts to push
            boundaries of what we can do to bring value into people&rsquo;s
            lives.
            <br />
            <br />
            At my core, I value curiosity, creativity, and clarity. I am always
            eager to learn and explore new technologies to deliver high—quality
            results.
          </p>
        </div>

        <div className="about-content">
          <p className="about-title">Contact</p>
          <p className="about-desc">hello@jerichofillon.com</p>
        </div>

        <div className="about-resume">
          <p>Request for my resume here.</p>
        </div>

        <div className="a-image-wrapper">
          <Image
            src={profilePic}
            alt="Jericho Fillon's profile picture"
            width={1500}
            height={487}
            loading="lazy"
            className="about-image"
          />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
