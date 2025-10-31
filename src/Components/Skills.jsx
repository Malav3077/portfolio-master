import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <div className="skills_list">
                                <ul className="list">
                                    <li><span>Odoo Development:</span> Strong experience with Odoo customization, module development, and ORM logic.</li>
                                    <li><span>Python Programming:</span> Proficient in Python for server-side logic and business logic in Odoo.</li>
                                    <li><span>QWeb & XML:</span> Skilled in designing custom reports, templates, and views using QWeb and XPath.</li>
                                    <li><span>PostgreSQL:</span> Solid understanding of PostgreSQL database structure used by Odoo.</li>
                                    <li><span>JavaScript (Odoo Frontend):</span> Knowledge of legacy JS, OWL (Odoo Web Library), and modern Odoo 17+ UI extensions.</li>
                                    <li><span>Git & Version Control:</span> Efficient with Git workflows, collaboration, and versioning of Odoo modules.</li>

                                    {/* mern stack */}
                                    <li><span>MERN Stack:</span> Proficient in building full-stack applications using MongoDB, Express.js, React.js, and Node.js.</li>

                                </ul>
                            </div>
                            <br />
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="Odoo" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Python" />
                                    <h5>Odoo Framework</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="PostgreSQL" />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="QWeb" />
                                    <h5>QWeb & XML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="JS" />
                                    <h5>JavaScript (OWL)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Git" />
                                    <h5>Git & GitHub</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="bg image" />
        </section>
    );
};
