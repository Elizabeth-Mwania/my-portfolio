import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../assets/home-main.svg";
import Tilt from "react-parallax-tilt";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  <span className="yellow"> Mastercard </span> Scholar!
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Elizabeth Mwania </span>
                 from <span className="yellow"> Kenya</span>
                <br />
                <br />
                Passionate about extracting insights from data using <br/>Machine Learning models
                  in <b className="yellow">Python</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      R
                    </b>
                  </i>
                  {/* &nbsp; like
                  <i>
                    <b className="yellow"> credit risk</b>
                  </i> */}
                  <br />
                  <br />
                  Other fiels of interest are:
                  <br/>
                  <i>
                    <b className="yellow"> 💻 Web Development | </b>
                    <br/>
                    <b className="yellow"> 🔐 Cybersecurity | </b>
                    <br/>
                    <b className="yellow"> 💰 Credit Risk Analysis </b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About