import {
  Container,
  Row,
  Col,
  TabContainer,
  TabPane,
  TabContent,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../../ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projectImg1 from "../assets/img/projectImg1.png";
import projectImg2 from "../assets/img/projectImg2.png";
import projectImg3 from "../assets/img/projectImg3.png";
import projectImg4 from "../assets/img/projectImg4.png";
import projectImg5 from "../assets/img/projectImg5.png";
import projectImg6 from "../assets/img/projectImg6.png";

export const ProfessionalH = () => {

 


  const projects = [
    {
      title: "Gemini AI Project",
      description: "Tech stack: HTML, CSS, REACTJS,Bootstrap,ExpressJS",
      Link: `https://ui-makeaibyking.onrender.com/`,
      imgUrl: projectImg1,
    },
    {
      title: "Job_Portal_App",
      description: "Tech stack: HTML, CSS and Javascript, React, Express, MongoDB",
      Link: `https://github.com/Malav3077/JOB_PORTAL_MERN.git`,
      imgUrl: projectImg2,
    },
    {
      title: "Online Tiffin Services",
      description: "Tech stack: HTML, CSS , javaScript , Laravel9",
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
            <h2>Professional highlights</h2>
            <h6 className="summary ">
             Short Summary of my Professional Journey
            </h6>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="first"
                className="nav-pills mb-5 justify-content-center align-item-center "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certificate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"> Achievements</Nav.Link>
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
                  <h4>
                    1) React and Laravel Workshop{" "}
                  </h4>

                  <p className="text-start">
                    Attended a workshop on React and Laravel at the Anand Institute of Management and Information Science, where I gained valuable insights into both frameworks. Upon completion, I received a certificate of achievement
                  </p>

<br />
                  <h4>
                    2) State Level Hackathon Participation{" "}
                  </h4>

                  <p className="text-start">
                    attended a hackathon in Mehsana, Visnagar, as part of the teams Code Villa and Web Spear, where we developed a project using C language for Code Villa and HTML, CSS, and JavaScript for Web Spear. Our team engaged in intense coding sprints, successfully presenting our solutions to a panel of judges. Our efforts were recognized with a second prize and a certificate of achievement, showcasing our teamwork and innovation in tackling real-world challenges.
                  </p>
<br />
                  <h4>
                    3)Hackathon Participation (CyberSecurity Project){" "}
                  </h4>

                  <p className="text-start">
                    I participated in a hackathon at Anand Institute of Management and Information Science, where we developed a phishing detection website tool focused on cybersecurity. Utilizing technologies such as HTML, CSS, JavaScript, and Python, our team created a solution that identifies and alerts users to potential phishing threats, showcasing the importance of cybersecurity awareness.
                  </p>
                </TabPane>
                <TabPane eventKey="third">
                  <h4>
                    1) Second Prize in Tech Vila (Designing) and Tech Spear (Coding)

                  </h4>
                  <p className="text-start">
                   I secured the Second Prize in a state-level coding competition, participating in both Tech Vila (Designing) and Tech Spear (Coding). In Tech Vila, I demonstrated my creativity by designing an innovative project, while in Tech Spear, I developed a robust coding solution that effectively addressed the challenge. This achievement showcases my skills in both design and coding, highlighting my versatility and commitment to excellence in technology. The experience also strengthened my collaboration and communication skills, motivating me to continue exploring new avenues in the tech field.
                  </p>

              
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </div>
  );
};
