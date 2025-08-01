import React from "react";
import "./about.css";
import ME from "../../assets/aboutme.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about_content ">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>

              <small>Fullstack</small>
            </article>

            <article className="about_card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>

              <small>5+</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>

              <small>5+</small>
            </article>
          </div>
          <p>
            Results-oriented Full Stack Developer with 3+ years of experience
            building scalable, secure web applications using Java, Spring Boot,
            React, and AWS. Expert in microservices architecture, RESTful API
            design, and database optimization (MongoDB, MySQL). Proven ability
            to lead agile teams and implement robust cybersecurity measures,
            including AES encryption and Vault integration. Committed to
            delivering high-performance, production-grade software that drives
            real business value
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
