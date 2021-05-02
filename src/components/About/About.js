import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="color">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <TechStack iconName="devicon-cplusplus-line" />
          <TechStack iconName="devicon-python-plain-wordmark " />
          <TechStack iconName="cib-pytorch" />
          <TechStack iconName="cib-tensorflow" />
          <TechStack iconName="devicon-javascript-plain " />
          <TechStack iconName="devicon-nodejs-plain-wordmark " />
          <TechStack iconName="devicon-express-original-wordmark" />
          <TechStack iconName="devicon-react-original-wordmark" />
          <TechStack iconName="devicon-mongodb-plain-wordmark" />
          <TechStack iconName="devicon-git-plain-wordmark" />
          <TechStack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="color">Tools and Technology</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <TechStack data-toggle="tooltip" title="Click me" iconName="devicon-linux-plain" />
          <TechStack iconName="cib-visual-studio-code" />
          <TechStack iconName="cib-anaconda" />
          <TechStack iconName="cib-postman" />
          <TechStack iconName="cib-zeit" />
          <TechStack iconName="cib-heroku" />
        </Row>
        <h1 className="project-heading my-4">
       MY  <strong className="color">Expertise </strong>
        </h1>
        <div class="row">
        <div class="col-lg-12">
        <div class="container">
              <h4 className="text-left my-2">Node</h4>
              <div class="progress ">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s  progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
              </div>
              <h4 className="text-left my-2">CSS</h4>
              <div class="progress">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
              <h4 className="text-left my-2">JavaScript</h4>
              <div class="progress">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              <h4 className="text-left my-2">WordPress</h4>
              <div class="progress">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-muted" role="progressbar" style={{width: '40%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">40%</div>
              </div>
              <h4 className="text-left my-2">React</h4>
              <div class="progress">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-info" role="progressbar" style={{width: '85%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
              </div>
              <h4 className="text-left my-2">Express</h4>
              <div class="progress ">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s  progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
              <h4 className="text-left my-2">MongoDB</h4>
              <div class="progress">
                <div class="wow animate__animated animate__fadeInLeft animate__fast animate__delay-1s progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
              </div>
              </div>
              </div>
              </div>					
      </Container>
    </Container>
  );
}

export default About;
