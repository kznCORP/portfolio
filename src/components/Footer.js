import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-rect">
          <div className="rect-container">
            <div className="black-rect"></div>
            <div className="grey-rect"></div>
            <div className="blue-rect"></div>
            <div className="yellow-rect"></div>
            <div className="red-rect"></div>
          </div>
        </div>

        <div className="footer-links">
          <div className="sitemap">
            <ul>
              <li className="footer-grey">Sitemap</li>
              <Link href="/">
                <li>Home</li>
              </Link>

              <Link href="/about">
                <li>About</li>
              </Link>
            </ul>
          </div>

          <div className="contact-me">
            <ul>
              <li className="footer-grey">Contact Me</li>
              <Link
                href="mailto:fillonjericho@gmail.com?subject=Project%20Inquiry&body=Hello%2C%20thank%20you%20for%20taking%20the%20time%20to%20surf%20through%20my%20portfolio%20and%20reach%20out%20%3A-)%0D%0A%0D%0APlease%20fill%20in%20the%20necessary%20information%20so%20that%20we%20can%20work%20together!%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0AGoal%3A%0D%0ACurrent%20Website(if%20applicable)%3A%0D%0ACompetitors(if%20applicable)%3A%0D%0ADesired%20Platform%20(WordPress%2FShopify%2FWebflow%2FCustom)%3A%20%0D%0ATimeline%20(deadline%2Flaunch%20date)%3A%0D%0ABudget%3A%0D%0A%0D%0A%0D%0AAny%20additional%20comments%20you'd%20like%20to%20mention%3A%0D%0A%0D%0A%0D%0A*Upon%20sending%20this%20email%2C%20I%20will%20reply%20back%20within%20the%20next%2024%20hours%20to%20accommodate%20your%20inquiry*"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>E-mail</li>
              </Link>

              <Link href="https://www.linkedin.com/in/jericho-fillon-24a692174/">
                <li>LinkedIn</li>
              </Link>
            </ul>
          </div>

          <div className="built-with">
            <ul>
              <li className="footer-grey">Built with</li>
              <Link href="https://nextjs.org">
                <li>Next.js</li>
              </Link>
              <Link href="https://sanity.io">
                <li>Sanity</li>
              </Link>
              <Link href="https://vercel.com">
                <li>Vercel</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="wip">
        <p>© 2023  <span className="footer-grey"> — Work in Progress</span></p>
      </div>
    </footer>
  );
};

export default Footer;
