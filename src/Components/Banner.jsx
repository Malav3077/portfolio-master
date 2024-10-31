import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"


export const Banner = () =>{

    const contactHandle  = () =>{
        const link = document.createElement('a');
        link.href = '#contact';
        link.id = 'contact';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <section className="banner" id="home">
            <Container className="" >
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi! I'm Malav Parekh`} </h1>
                        <p> On the journey to becoming a MERN Stack Developer with skills in React, Node, and Express. Passionate about learning and building impactful web applications. Excited to connect with like-minded individuals and collaborate on innovative projects. Let’s make something amazing..!


</p>
                        <button onClick={contactHandle}> let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <img src={headerImg} alt="header image" />
                    </Col>

                </Row>
            </Container>

        </section>

    )
}