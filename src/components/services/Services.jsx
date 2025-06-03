import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Java</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Core Java</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Spring Boot</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Spring MVC</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Eureka</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>API Gateway</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>JWT Authentication</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Spring Data</p>
            </li>
          </ul>
          {/* End of Java */}
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>REST API Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Microservices Architecture</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Database Integration for RDBMS and NOSQL</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Authentication & Authorization</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>API Gateway & Service Discovery</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Containerization & Deployment</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Legacy Application Migration</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Cybersecurity Implementation</p>
            </li>
          </ul>
          {/* End of WebDevlopement */}
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Others</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive Web App Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Custom Dashboards & Admin Panels</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Full-Stack Application Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>CI/CD Pipeline Setup</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Dockerization of Applications</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>MySQL and MongoDB Database Setup & Optimization</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>MySQL and MongoDB Database Setup & Optimization</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Documentation</p>
            </li>
          </ul>
          {/* End of Others */}
        </article>
      </div>
    </section>
  );
};

export default Service;
