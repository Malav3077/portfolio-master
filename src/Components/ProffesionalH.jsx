import {
  Container,
  Row,
  Col,
  TabContainer,
  TabPane,
  TabContent,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projectImg1 from "../assets/img/projectImg1.png";
import projectImg2 from "../assets/img/projectImg2.png";
import projectImg3 from "../assets/img/projectImg3.png";
import projectImg4 from "../assets/img/projectImg4.png";

export const ProfessionalH = () => {
  const projects = [
    {
      title: "Gemini AI Project",
      description: "Tech stack: HTML, CSS, REACTJS, Bootstrap, ExpressJS",
      Link: `https://ui-makeaibyking.onrender.com/`,
      imgUrl: projectImg1,
    },
    {
      title: "Job_Portal_App",
      description: "Tech stack: HTML, CSS, JavaScript, React, Express, MongoDB",
      Link: `https://github.com/Malav3077/JOB_PORTAL_MERN.git`,
      imgUrl: projectImg2,
    },
    {
      title: "Online Tiffin Services",
      description: "Tech stack: HTML, CSS, JavaScript, Laravel 9",
      Link: `https://github.com/Malav3077/Online-Tiffin-Service-project.git`,
      imgUrl: projectImg3,
    },
    {
      title: "Impact-of-Technology-on-Climate-Change",
      description: "Tech stack: WordPress",
      Link: `https://github.com/Malav3077/Impact-of-Technology-on-Climate-Change.git`,
      imgUrl: projectImg4,
    },
  ];

  return (
    <div className="ph" id="ph">
      <Container>
        <Row>
          <Col>
            <h2>Professional Highlights</h2>
            <h6 className="summary">Short Summary of my Professional Journey</h6>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certificate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Achievements</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Experience</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </TabPane>

                <TabPane eventKey="second">
                  <h4>1) React and Laravel Workshop</h4>
                  <p className="text-start">
                    Attended a workshop on React and Laravel at the Anand Institute of Management and Information Science, where I gained valuable insights into both frameworks. Upon completion, I received a certificate of achievement.
                  </p>
                  <br />
                  <h4>2) State Level Hackathon Participation</h4>
                  <p className="text-start">
                    Participated in a hackathon at Visnagar with teams Code Villa and Web Spear. We built solutions using C and JavaScript respectively, winning second prize and gaining hands-on problem-solving experience.
                  </p>
                  <br />
                  <h4>3) CyberSecurity Hackathon</h4>
                  <p className="text-start">
                    Developed a phishing detection tool using HTML, CSS, JS, and Python during a cybersecurity hackathon. The project raised awareness on safe browsing practices.
                  </p>
                </TabPane>

                <TabPane eventKey="third">
                  <h4>1) Second Prize in Tech Vila (Design) & Tech Spear (Coding)</h4>
                  <p className="text-start">
                    I secured the Second Prize at a state-level competition for both design and coding events. I created UI designs in Tech Vila and coded problem-solving logic in Tech Spear, showcasing my versatility and creativity.
                  </p>
                </TabPane>

                <TabPane eventKey="fourth">
                  <h4>Internship – Odoo Developer (6 Months)</h4>
                  <p className="text-start">
                    Completed a 6-month internship as an Odoo Developer, gaining hands-on experience with Python-based server logic, Odoo's ORM, QWeb report customization, and module creation. Worked closely with senior developers and contributed to real-world ERP applications.
                  </p>

                  <h4>Full-Time Role – Odoo Developer at RDFLEX Technologies</h4>
                  <p className="text-start">
                    Currently working as a full-time Odoo Developer at RDFLEX Technologies. Responsible for end-to-end module development, backend logic in Python, frontend customization using XML/QWeb, and client-specific automation solutions. My role also includes resolving bugs, integrating third-party tools, and contributing to business workflows using Odoo 14–17.
                  </p>
                </TabPane>
              </TabContent> 
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="bg" className="background-image-right" />
    </div>
  );
};
