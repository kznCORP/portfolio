import React from "react";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <h1 className="intro-description" id="intro-mobile">
          <span className="intro-grey">Jericho Fillon</span>
          <br />
          <span className="intro-role">Software Developer</span>
          <br />
          <span className="intro-role">I build brands, products</span>
          <br />
          <span className="intro-role">and applications</span>
        </h1>

        <h1 className="intro-description" id="intro-desktop">
          <span className="intro-grey">Jericho Fillon</span>
          <br />
          <span className="intro-role">Software Developer</span>
          <br />
          <span className="intro-role">
            I build brands, products and applications.
          </span>
        </h1>

        <div className="intro-code">
          <span className="left-bracket">&#123;</span>
          <div className="dot-container">
            <div className="blue-dot"></div>
            <div className="yellow-dot"></div>
            <div className="red-dot"></div>
          </div>
          <span className="right-bracket">&#125;</span>
        </div>
      </div>

      <div className="intro-right">
        <div className="intro-clients">
          <ul>
            <li className="intro-grey">Clients</li>
            <li className="coming-soon">KREDO</li>
            <li>Studio Narido</li>
            <li>BCIT</li>
            <li>...</li>
          </ul>
        </div>

        <div className="intro-services">
          <ul>
            <li className="intro-grey">Services</li>
            <li>App design</li>
            <li>Brand identity</li>
            <li>Design systems</li>
            <li>E-commerce</li>
            <li>Front-end dev</li>
            <li>Mock-ups</li>
            <li>Prototyping</li>
            <li>Websites</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
