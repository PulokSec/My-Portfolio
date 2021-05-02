import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ResumeContent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Resume_Pulok_Chowdhury.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>RESUME
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeContent
              title="Upwork"
              date="Sept 2019 - present"
              content={[
                "Various e-commerce sites for clients",
                " Wrote html sites from various UI/UX designs",
              ]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <ResumeContent
              title=""
              content={[
                'Honorable Mention Android App Projects',
                'Design Awards, SEC Developers',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
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
