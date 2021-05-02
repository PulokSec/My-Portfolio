import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import project1 from "../../Assets/Projects/project5.png";
import project2 from "../../Assets/Projects/project4.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project2.png";
import project5 from "../../Assets/Projects/project1.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="color">Projects </strong>
        </h1>
        <p style={{ color: "#308E94" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="EZE Service (MERN Stack)"
              description="All kind of music production,hosting,advertising,archiving services.User personal dashboard 3.Admin differernt pannel.Admin Can add service,manage orders,set orders,add teams.User can review"
              link="https://eze-service.web.app/"
              code="https://github.com/PulokSec/eze-service-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Book Worm Store"
              description="Find Your desire books on demand.Easy to buy and manage your orders.Popular authentication system.Admin panel to add products and manage orders."
              link="https://book-worm-store.web.app/"
              code="https://github.com/PulokSec/book-worm-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Action Core Teams"
              description="This app has collection of several English Premier League Teams. Visitor also get detailed information such as foundation date,country,sports type etc. This site is made for all the supporter,players and sports enthusiasts."
              link="https://action-core-teams.netlify.app/"
              code="https://github.com/PulokSec/Action-Core-Teams"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Hornet Gadget Store"
              description="Find various types of gadgets and electronic appliances.Its just a landing page or homepage.Work with and electronic e-commerce site."
              link="https://puloksec.github.io/HornetGadget/"
              code="https://github.com/PulokSec/HornetGadget"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="KhaibaNaki-FoodSite"
              description="Best Site for food lovers and cookers.Find thousands of food-items by search.See cooking methods and cook whatever you like."
              link=" https://puloksec.github.io/KhaibaNaki-FoodSite/"
              code="https://github.com/PulokSec/KhaibaNaki-FoodSite"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="color">Blog </strong> Posts
        </h1>
        <p style={{ color: "#308E94" }}>Have a look some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath=""
              link=""
              title="Coming Soon"
              site=""
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath=""
              link=""
              title="Coming Soon"
              // site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
