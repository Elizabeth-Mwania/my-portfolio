import React from 'react';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
// import ContactForm from '../components/Contact/Contact';
import { Row, Col } from "react-bootstrap";
// import LaptopImg from "../assets/home-main.svg";
import { FaLinkedinIn, FaEnvelope  } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
// import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      {/* <ContactForm /> */}
      {/* <Social /> */}
      <Row>
              <Col md={12} className="home-about-social">
                {/* <h1>FIND ME ON</h1> */}
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                  <a
                      href="mwania.m.elizabeth@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="email"
                    >
                      <FaEnvelope  />
                    </a>
                  </li>
                  <li className="social-icons">
                  
                    <a
                      href="https://github.com/Elizabeth-Mwania/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/elizabethmwania/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiOutlineInstagram />
                      {/* <SiLeetcode /> */}
                    {/* </a>
                  </li> */} */
                </ul>
              </Col>
            </Row>
    </Container>
  )
}

export default Contact