import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="btn-primary" href="https://drive.google.com/uc?export=download&id=1fPeTptNa2EQ0jVeXiJVxxuyap0t6Qr8_" target="_blank">
            <i className="fas fa-cloud-download-alt">&nbsp;</i>RESUME
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h1 className="resume-title">Experience</h1>
            <ResumeContent
              title="Upwork"
              date="Sept 2019 - present"
              content={[
                "Various e-commerce sites for clients",
                "PSD to HTML, FIGMA/Adobe XD to HTML design.",
              ]}
            />
            <h1 className="resume-title">Ranks and Achivements</h1>
            <ResumeContent
              title="6th International Conference for Convergence in Technology (12CT)"
              content={[
                'Transfer Learning Approach for Diabetic Retinopathy Detection using Efficient Network with 2 phase Training',
              ]}
              link="https://drive.google.com/uc?export=download&id=1ri7G9rMUmcnUGQXDiwL0-CKafMq9duH4"
              status="Paper"
            />
            <ResumeContent
              title="Skill Development for Mobile Game and Application Project (ICT Division)"
              content={[
                'Honorable Mention Android App Projects',
              ]}
              link="#"
              status="Updating Soon"
            />
          </Col>
          <Col md={6} className="resume-right">
            <h1 className="resume-title">Education</h1>
            <ResumeContent
              title="SYLHET ENGINEERING COLLEGE,SYLHET "
              date="2016 - Present"
              content={[`CGPA: "3.48" (Till 6th Sem)`]}
            />
            <ResumeContent
              title="Nilphamari Govt. College,Nilphamari"
              date="2013 - 2015"
              content={["Grade: GPA-5.00"]}
            />
            <ResumeContent
              title="Nilphamari Govt. High School,Nilphamari "
              date="2005 - 2015"
              content={["Grade: GPA-5.00"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
