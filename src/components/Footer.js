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
                href="https://riopulok@gmail.com"
                style={{ color: "#010203",fontWeight:"bold" }}
              >
                 riopulok@gmail.com
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
