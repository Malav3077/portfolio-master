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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectImg1 from "../assets/img/projectImg1.png";
import projectImg2 from "../assets/img/projectImg2.png";
import projectImg3 from "../assets/img/projectImg3.png";
import projectImg4 from "../assets/img/projectImg4.png";

export const ProfessionalH = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Platxa — AI Odoo Module Generator",
      description:
        "Python · FastAPI · Odoo · Docker · Kubernetes | AI SaaS that auto-generates & deploys Odoo ERP modules from a prompt",
      Link: `https://github.com/platxa/`,
      imgUrl: projectImg1,
    },
    {
      title: "Hotel Management System",
      description:
        "Odoo 18 · Python · ORM · PostgreSQL · Razorpay | Room booking, check-in/out, billing & payment gateway",
      Link: `https://github.com/Malav3077/Hotel-Management--odoo18`,
      imgUrl: projectImg2,
    },
    {
      title: "Foodie Hub — Food Ordering App",
      description:
        "React.js · FastAPI · Docker · JWT Auth | Real-time food ordering with multi-role support",
      Link: `https://github.com/Malav3077/Foodie-hub-Delivery-App`,
      imgUrl: projectImg3,
    },
  ];

  return (
    <div className="ph" id="ph" ref={ref}>
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2>Professional Highlights</h2>
              <h6 className="summary">My journey so far</h6>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TabContainer id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-start align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Certificates</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Achievements</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Education</Nav.Link>
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
                    <h4>React and Laravel Workshop</h4>
                    <p>
                      Attended a workshop on React and Laravel at the Anand
                      Institute of Management and Information Science, where I
                      gained valuable insights into both frameworks. Upon
                      completion, I received a certificate of achievement.
                    </p>

                    <h4>State Level Hackathon Participation</h4>
                    <p>
                      Participated in a hackathon at Visnagar with teams Code
                      Villa and Web Spear. We built solutions using C and
                      JavaScript respectively, winning second prize and gaining
                      hands-on problem-solving experience.
                    </p>

                    <h4>CyberSecurity Hackathon</h4>
                    <p>
                      Developed a phishing detection tool using HTML, CSS, JS,
                      and Python during a cybersecurity hackathon. The project
                      raised awareness on safe browsing practices.
                    </p>
                  </TabPane>

                  <TabPane eventKey="third">
                    <h4>2nd Place — State Level Tech Competition</h4>
                    <p>
                      Secured 2nd Place at Sakalchand University, Visnagar in Web Design (Code Spear)
                      &amp; C Language (Code Villa) events.
                    </p>
                    <h4>Finalist — Odoo × KSV Hackathon 2026</h4>
                    <p>
                      Selected as Finalist at Odoo × KSV Hackathon 2026 held at LDRP-ITR Campus,
                      Gandhinagar (July 2026).
                    </p>
                  </TabPane>

                  <TabPane eventKey="fourth">
                    <h4>Odoo Developer — RDFlex Pvt. Ltd., Gandhinagar</h4>
                    <p>Jul 2025 – Present</p>
                    <p>
                      Developing and customizing Odoo 18 modules — creating models, XML views (form, tree),
                      and business logic using Python ORM. Contributing to Platxa — AI SaaS that auto-generates
                      &amp; deploys complete Odoo ERP modules from a natural language prompt. Managing PostgreSQL
                      databases and resolving Odoo module installation issues.
                    </p>

                    <h4>Python Developer Intern — RDFlex Pvt. Ltd., Gandhinagar</h4>
                    <p>Jan 2025 – Jun 2025</p>
                    <p>
                      Completed Core Python training (OOP, REST APIs) followed by in-depth Odoo 18 framework
                      training — models, XML views, ORM, computed fields. Built a complete Hotel Management ERP
                      in Odoo 18 with room booking, billing, and Razorpay payment gateway.
                    </p>
                  </TabPane>

                  <TabPane eventKey="fifth">
                    <h4>MCA — AIMIS, Gujarat Technological University</h4>
                    <p>CPI: 8.57 &nbsp;|&nbsp; 2023 – 2025</p>

                    <h4>PGDCA — Gujarat Vidyapith, Ahmedabad</h4>
                    <p>CGPA: 7.72 &nbsp;|&nbsp; 2022 – 2023</p>

                    <h4>B.COM — Gujarat College, Ahmedabad</h4>
                    <p>60.13% &nbsp;|&nbsp; 2019 – 2022</p>

                    <h4>HSC — Navyug Vidhyalay, Ahmedabad</h4>
                    <p>64.00% &nbsp;|&nbsp; 2019</p>
                  </TabPane>
                </TabContent>
              </TabContainer>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
