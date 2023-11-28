import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../MailchimpForm";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="">
            <h1 class="text-white cursor-pointer my-auto">Mina Lofty</h1>{" "}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/minalotfy/" target="_blank">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/MINALOTFY10" target="_blank">
                <img src={navIcon2} alt="Github" />
              </a>
              <a href="mailto:menalotfy@gmail.com" target="_blank">
                <img src={navIcon3} alt="Gmail" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

