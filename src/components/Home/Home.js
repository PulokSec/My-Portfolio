import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Resume_Pulok_Chowdhury.pdf";
import Contact from '../Contact/Contact'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content text-center">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pulok Chowdhury</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
                <Button variant="primary" target="_blank" href={pdf}  rel="noopener"><i className="fas fa-download">&nbsp;</i>RESUME</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Contact/>
    </section>
  );
}

export default Home;
