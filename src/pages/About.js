import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <section className="about">
        <h2>Dominik Juriga.</h2>
        <img src="/profile.jpg" alt="Profile" />
        <div className="heroDescription">
          <p>
            I'm a student of Computer Networks & Communication attending Masaryk
            University in Brno. I am interested in technology, visual arts,
            photography and filmmaking. I like talking about programming,
            coffee, beer, cars, cameras or games.
          </p>
          <p>
            I was born and raised in Slovakia, but my path has taken me to Brno,
            Czech Republic. I had a deep interest in technology ever since I was
            child. As years passed, I picked up graphic design and filmmaking as
            a hobby. These are hobbies that I keep to this day, but my passion
            lies in programming. That is why I decided to pursue this passion
            and take up a degree in IT.
          </p>
          <p>
            This decision was bittersweet in the beginning, because university
            was all the things I did not think it would be. After a couple weeks
            I caught up and things looked a lot brighter. I recently finished
            the bachelor study. My thesis focused on CMS that allows users to
            create team plans. It was implemented with MERN stack and GraphQL
            API.
          </p>
          <p>
            This brings us to today. I'm excited to see what the future holds!
            Any and all inquiries can be directed to{" "}
            <a href="mailto:jurigadominik@gmail.com">jurigadominik@gmail.com</a>
            .
          </p>
        </div>
      </section>
      <div className="buttonContainer">
        <NavLink to="/" className="button" id="backButton">
          {" "}
          <span role="img" aria-label="Go Back Emoji">
            👈
          </span>{" "}
          Back
        </NavLink>
      </div>
    </Fragment>
  );
};

export default About;
