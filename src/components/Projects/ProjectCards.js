import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.code} target="_blank">
          <i className="fab fa-github">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button variant="primary" className="ml-3" href={props.link} target="_blank">
          <i className="fas fa-tv">&nbsp;</i>
          {props.isBlog ? "View Blog" : "Live Site"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
