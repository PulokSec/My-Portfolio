import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="color">Pulok Chowdhury </span>
            from <span className="color"> Dhaka,Bangladesh</span>
            <br />I am a Web and App Developer.Love Programming. 
            <br />
            <br />
            And I love to do
          </p>
          <ul>
            <li className="about-activity">
               Music
            </li>
            <li className="about-activity">
              Competitive Games
            </li>
            <li className="about-activity">
               Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
