import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function BlogsCards(props) {
  return (
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Body>
        <Card.Title className="main-name" style={{color:"#308E9A",fontWeight:"bold",fontSize:"1.8em"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify-content-center", fontWeight:"600", fontSize:"1.2em" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" className="pl-3" href={props.link} target="_blank">
          <i className="fas fa-external-link-alt">&nbsp;</i>
        </Button>
      </Card.Body>
      </Card>
  );
}

export default BlogsCards;
