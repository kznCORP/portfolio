const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-dots">
        <div className="dot-container">
          <div className="blue-dot"></div>
          <div className="yellow-dot"></div>
          <div className="red-dot"></div>
        </div>
      </div>

      <div className="footer-content">
        <div className="contact-me">
          <ul>
            <li className="footer-grey">Contact Me</li>
            <li>E-mail</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="built-with">
          <ul>
            <li className="footer-grey">Built with</li>
            <li>Next.js</li>
            <li>Sanity</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>

      <div className="wip">
        <p className="footer-grey">Work In Progress</p>
        <p>© 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
