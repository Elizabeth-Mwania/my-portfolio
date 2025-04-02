import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../assets/home-main.svg";
import Tilt from "react-parallax-tilt";



const Education = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <p className="home-about-body">
                <b className="yellow">🎓 Master’s Degree in Mathematical Sciences</b>
                <br/>
                <br/>
                I'm currenty enrolled at African Institute of Mathematical Sciences (AIMS), Cameroon, Specializing in Data Science.
                <br />
                <br />
                  As a
                  <b className="yellow"> data scientist </b>,  
                  I enjoy transforming data into actionable insights.
                  <br />I've build skills
                    <b className="yellow">  Data Analysis & Visualization, </b>
                    using Matplotlib / Seaborn, Plotly, Streamlit
                  <br />
                  <br />
                  In 
                  <b className="yellow"> Machine Learning  & Deep Learning </b>,  
                  I'm equipped with both Supervised & Unsupervised Learning techniques
                  <br />I've build skills
                    <b className="yellow">  Scikit-learn, </b>
                    Flask and FastAPI, CNNs and RNNs
                  <br />
                  <br />
                  I've developed skills in 
                  <b className="yellow"> Natural Language Processing </b>
                  <br /> by using
                    <b className="yellow">  Transformer based </b>
                    models like BERT, RoBERTa, XLNet.
                  <br />
                  <br />
                </p>
                <p className="home-about-body">
                <b className="yellow">🎓 Bachelor’s Degree in Mathematics and Computer Science</b>
                <br/>
                <br/>
                Graduated from Maseno University with a BSC. Mathematics and Computer Science, specializing in Computer Science
                <br />
                <br />
                  As a
                  <b className="yellow"> computer scientist </b>,  
                  I aim to develop software applications and systems that solve real-world problems.
                  <br />I've build skills in
                    <b className="yellow">  Java/Spring Boot, Python/Django, Javascript/Reactjs and HTML and CSS </b> to develop
                  <br />
                  <br />
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

export default Education