import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="home-about-body mb-0">
          <p style={{ textAlign: "justify", fontSize:"1.2em", fontWeight:"100%" }}>
            Hi Everyone, I am <br/>
            <span className="color">Pulok Chowdhury</span>
            <br/>
             from
             <span className="color"> Dhaka,Bangladesh</span>
            <br/>I am 
            Dedicated and Full-stack developer with 2 years of experience in scalable web applications and internal tools.I'm looking for an entry level position where my skills and innate abilities can be effectively utilized.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
