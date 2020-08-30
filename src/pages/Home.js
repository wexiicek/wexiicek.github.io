import React, { Fragment } from "react";
import ImgCarousel from "../components/ImgCarousel";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <Fragment>
      <section id="about">
        <h1 id="hero">
          <span role="img" aria-label="Wave Emoji" id="heroEmoji">
            👋
          </span>
          {", "}
          I'm Dominik.
        </h1>
        <p id="heroDescription">
          I am driven to provide the best possible digital experience for you
          and your business.
        </p>
      </section>
      <section id="work">
        <h2>Work Experience</h2>
        <div className="timeline">
          <div className="timelineItem">
            <div className="duration">Jun 2019</div>
            <h3>Web Developer</h3>
            <a href="https://www.dactylgroup.com">Dactyl Group, Brno</a>
            <p>Full stack web development in PHP Yii 2.0 framework.</p>
          </div>
          <div className="timelineItem">
            <div className="duration">Sep 2018</div>
            <h3>QA Tester</h3>
            <a href="https://www.dactylgroup.com">Dactyl Group, Brno</a>
            <p>
              Website and phone app testing. Bug hunting and reporting. Usage
              pattern analysis.
            </p>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ImgCarousel />
      </section>
      <section id="education">
        <h2>Education</h2>
        <div className="educationItem">
          <div className="top">
            <span role="img" aria-label="Active Hourglass Emoji" id="hourglass">
              ⏳
            </span>
          </div>
          <h3>Master's Study in Computer Networking</h3>
          <div className="institution">
            <a href="https://www.fi.muni.cz/">Masaryk University, Brno</a>
            <span className="status">First year</span>
          </div>
          <p>
            Master's study focused on advanced knowledge of networking
            architecture and principles.
          </p>
        </div>
        <div className="educationItem">
          <div className="top">
            <span role="img" aria-label="Graduation Hat Emoji">
              🎓
            </span>
          </div>
          <h3>Bachelor's Degree in Computer Science</h3>
          <div className="institution">
            <a href="https://www.fit.vut.cz/">
              Brno University of Technology, Brno
            </a>
            <span className="status">Finished</span>
          </div>
          <p>
            General study of IT including electrical engineering, artificial
            intellingece, networking, etc.
          </p>
        </div>
      </section>
      <section id="toolkit">
        <h2>Toolkit</h2>
        <p>
          The list below is a quick overview of technologies I am familiar with.
        </p>
        <div className="toolkit-items">
          <div className="tk-item">
            <i id="html-logo" className="lab la-html5"></i>
            <span>HTML5</span>
          </div>
          <div className="tk-item">
            <i id="css-logo" className="lab la-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div className="tk-item">
            <i id="react-logo" className="lab la-react"></i>
            <span>React</span>
          </div>
          <div className="tk-item">
            <i id="node-logo" className="lab la-node"></i>
            <span>Node.js</span>
          </div>
          <div className="tk-item">
            <i id="figma-logo" className="lab la-figma"></i>
            <span>Figma</span>
          </div>
          <div className="tk-item">
            <i id="git-logo" className="lab la-git"></i>
            <span>GIT</span>
          </div>
          <div className="tk-item">
            <i id="laravel-logo" className="lab la-laravel"></i>
            <span>Laravel</span>
          </div>
          <div className="tk-item">
            <img src="/graphql.svg" alt="GraphQL Logo" />
            <span>GraphQL</span>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Get In Touch</h2>
        <img src="/profile.jpg" alt="Head Portrait" />
        <p className="description">
          You can mostly find me running around Brno, where the coffee is good
          and the beer is even better. If you want to talk, I'm available at{" "}
          <a href="mailto:jurigadominik@gmail.com">jurigadominik@gmail.com</a>{" "}
          or socials. You can also take a look at my photography page at{" "}
          <a href="https://dominikjuriga.me/photofolio">
            dominikjuriga.me/photofolio
          </a>
        </p>
        <div className="icons">
          <a href="https://www.instagram.com/dominik.juriga/">
            <img src="/instagram-brands.svg" alt="Instagram Link" />
          </a>
          <a href="https://www.linkedin.com/in/dominikjuriga/">
            <img src="/linkedin-brands.svg" alt="LinkedIn Link" />
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default home;
