import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const contactHandle = () => {
    const link = document.createElement('a');
    link.href = '#contact';
    link.id = 'contact';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{`Hi! I'm Malav Parekh`}</h1>
            <p>
              A passionate Python Developer specializing in Odoo ERP. I build robust, scalable business solutions with expertise in backend logic, module customization, and business workflow automation. Always eager to collaborate on impactful projects and explore new ways to optimize business processes with Odoo.
            </p>
            <button onClick={contactHandle}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
