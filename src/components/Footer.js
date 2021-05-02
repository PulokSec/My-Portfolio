import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Pulok Chowdhury</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Pulok Chowdhury</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/puloksec"
                style={{ color: "#ff0909" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/pulok.chowdhury.priyo/"
                style={{ color: "#ff0909" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pulok-chowdhury-priyo/"
                style={{ color: "#ff0909" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/pulok_chowdhury_priyo/"
                style={{ color: "#ff0909" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
