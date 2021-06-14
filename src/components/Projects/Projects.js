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
import project6 from "../../Assets/Projects/project6.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="main-name"style={{ fontSize: "2.6em" }}>
          My Recent <strong className="color">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="Travel Diaries (MERN Stack)"
              description="Has signed in and signed up with JWT authentication, Hashed Passwords in database.Has like and comment functionality.Users can search any user from the search box, follow and unfollow other users.Users can create, update their profile and also delete their post."
              link="https://travel-diaries-social-site.web.app/"
              client="https://github.com/PulokSec/travel-diaries-social-site"
              server="https://github.com/PulokSec/travel-diaries-social-site-server"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="EZE Service (MERN Stack)"
              description="All kind of music production,hosting,advertising,archiving services.User personal dashboard Admin different panel.Admin Can add service,manage orders,set orders,add teams.User can review"
              live="https://eze-service.web.app/"
              client="https://github.com/PulokSec/eze-service-client"
              server="https://github.com/PulokSec/eze-service-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Book Worm Store"
              description="Find Your desire books on demand.Easy to buy and manage your orders.Popular authentication system.Admin panel to add products and manage orders."
              live="https://book-worm-store.web.app/"
              client="https://github.com/PulokSec/book-worm-client"
              server="https://github.com/PulokSec/book-worm-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Action Core Teams"
              description="This app has collection of several English Premier League Teams. Visitor also get detailed information such as foundation date,country,sports type etc. This site is made for all the supporter,players and sports enthusiasts."
              live="https://action-core-teams.netlify.app/"
              client="https://github.com/PulokSec/Action-Core-Teams"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Hornet Gadget Store"
              description="Find various types of gadgets and electronic appliances.Its just a landing page or homepage.Work with and electronic e-commerce site."
              live="https://puloksec.github.io/HornetGadget/"
              client="https://github.com/PulokSec/HornetGadget"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="KhaibaNaki-FoodSite"
              description="Best Site for food lovers and cookers.Find thousands of food-items by search.See cooking methods and cook whatever you like."
              live=" https://puloksec.github.io/KhaibaNaki-FoodSite/"
              client="https://github.com/PulokSec/KhaibaNaki-FoodSite"
            />
          </Col>
        </Row>
        <h1 className="main-name" style={{ fontSize: "2.6em" }}>
          My Recent <strong className="color">Blog </strong> Posts
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/1400/1*0jH9DLv5e94sxHXWz5JD8w.png"
              link="https://riopulok.medium.com/react-happy-concepts-831fedfa3a8b"
              title="React | Happy Concepts 😀"
              description="React is a JavaScript “library”. It is not exactly a “framework”. It is not a complete solution and you will often need to use more libraries with React to form any solution. React does not assume anything about the other parts in any solution."
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/616/1*Dl33613O8kef_XMDpRzNww.png"
              link="https://riopulok.medium.com/s-means-strong-find-out-https-6a3847cc124b"
              title="“S” Means “Strong” Find Out — (HTTPS)"
              description="Extra “s” means your connection to that website is secure and encrypted; any data you enter is safely shared with that website. The technology that powers that little “s” is called SSL, which stands for “Secure Sockets Layer.”"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/1900/1*cl2Sk0bVXStfRbrfjLzXOQ.png"
              link="https://riopulok.medium.com/how-all-javascripts-numbers-42d94deb8d24"
              title="How all Javascript’s numbers??"
              description="What is a Number?
              The Number type is a double-precision 64-bit binary format IEEE 754 value (numbers between -(253 − 1) and 253 − 1). But because such Number values aren’t real integers, you have to be a little careful.
              ECMAScript has two built-in numeric types: Number and BigInt."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
