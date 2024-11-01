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
                                    <li><span>Frontend Development: </span>Proficient in HTML, CSS, and modern CSS frameworks like Bootstrap and Tailwind CSS.</li>
                                    <li><span>JavaScript: </span>Expertise in JavaScript, including ES6+ features.</li>
                                    <li><span>ReactJS & NodeJS: </span>Skilled in building dynamic user interfaces, single-page applications, and server-side rendered applications with ReactJS and NodeJS.</li>
                                    <li><span>Backend Frameworks: </span>Experience with Laravel for PHP applications and Express.js for Node.js applications.</li>
                                    <li><span>Databases: </span>MySQL and MongoDB for database management.</li>
                                    <li><span>Version Control: </span>Proficient in Git for version control and GitHub for collaboration and code repository management.</li>
                                </ul>
                            </div>
                            <br />
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Frontend Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Backend Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Version Control</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Design Skills</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Laravel & Express.js</h5>
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
