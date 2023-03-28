import Meta from "../../src/components/Meta";
import Header from "../../src/components/Header";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../../src/assets/headshot.png";

const AboutMe = () => {
  return (
    <>
      {/* Meta tags for SEO  */}
      <Meta title="About Me | Jericho Fillon" />
      <Header />
      <section className="about-me">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-name">Jericho Fillon</h1>
            <h2 className="about-role">
              I build brands, products and applications.
            </h2>
          </div>

          <div className="about-desktop">
            <div className="about-content" id="introduction">
              <p className="about-title">Introduction</p>
              <p className="about-desc">
                I&rsquo;m a creative developer and digital story — teller
                focused on helping people stand out in today&rsquo;s competitive
                landscape.
                <br />
                <br />
                <span className="grey">
                  Wherever possible, I approach every project with attempts to
                  push boundaries of what we can do to bring value into
                  people&rsquo;s lives.
                </span>
                <br />
                <br />
                At my core, I value curiosity, creativity, and clarity. I am
                always eager to learn and explore new technologies to deliver
                high — quality results.
              </p>
            </div>

            <div className="about-content" id="contact">
              <p className="about-title">Contact</p>
              <p className="about-desc">
                <span>
                  <Link
                    href="mailto:fillonjericho@gmail.com?subject=Project%20Inquiry&body=Hello%2C%20thank%20you%20for%20taking%20the%20time%20to%20surf%20through%20my%20portfolio%20and%20reach%20out%20%3A-)%0D%0A%0D%0APlease%20fill%20in%20the%20necessary%20information%20so%20that%20we%20can%20work%20together!%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0AGoal%3A%0D%0ACurrent%20Website(if%20applicable)%3A%0D%0ACompetitors(if%20applicable)%3A%0D%0ADesired%20Platform%20(WordPress%2FShopify%2FWebflow%2FCustom)%3A%20%0D%0ATimeline%20(deadline%2Flaunch%20date)%3A%0D%0ABudget%3A%0D%0A%0D%0A%0D%0AAny%20additional%20comments%20you'd%20like%20to%20mention%3A%0D%0A%0D%0A%0D%0A*Upon%20sending%20this%20email%2C%20I%20will%20reply%20back%20within%20the%20next%2024%20hours%20to%20accommodate%20your%20inquiry*"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    fillonjericho@gmail.com
                  </Link>
                </span>
              </p>
            </div>
          </div>
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
