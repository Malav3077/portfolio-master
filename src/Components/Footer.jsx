import { Container, Row, Col } from "react-bootstrap"
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";


export const Footer = () => {

    return (

        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
                        <p>Odoo Developer | Python Enthusiast | MERN Stack Developer</p>
                    </Col>
                    <Col xs={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon d-inline-flex mb-2">
                            <a target="_blank" href="https://www.linkedin.com/in/malav-parekh-937139292/"><img src={linkedin} alt="linkedIn" /></a>
                            <a href="https://github.com/Malav3077/" target="_blank"><img src={github} alt="Github" /></a>
                            <a target="_blank" href="https://www.instagram.com/malav_._3077._/"><img src={twitter} alt="x" /></a>
                        </div>
                        <p className="mb-0">Copyright 2024. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}