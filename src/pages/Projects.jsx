import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Credit_card_approval_banner from "../assets/projects/Credit_card_approval_banner.png";
import project from "../assets/projects/project.jpeg";
import graduate from "../assets/projects/graduate.png";
// import krypto from "../assets/projects/krypto.png";
import crypto from "../assets/projects/crypto.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Yahoo Realtime Cryptography Dashboard"
              description="This project to analyse Cryptography data from Yahoo API. The main technologies used
              are: Dash and Plotly to create dashboard, yfinance to fetch cryptocurrency data from Yahoo Finance,
              Pandas & NumPy for data manipulation and calculations"
              ghLink="https://github.com/Elizabeth-Mwania/Crypto_Analysis_with_Yahoo_API"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graduate}
              isBlog={false}
              title="Graduate Admission Prediction"
              description="This project is created to predict Graduate Admissions on a Masters Program. It considers several parameters which are that are considered important during the application for Masters Programs."
              ghLink="https://github.com/Elizabeth-Mwania/Admission_Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Malaria Detection"
              description="This project focuses on analyzing malaria data to build a predictive model that classifies cases as either Severe or Not Severe using a decision tree algorithm. The project includes steps for data preprocessing, visualization, model training, and evaluation to address class imbalance and ensure accurate predictions."
              ghLink="https://github.com/Elizabeth-Mwania/malaria_detection_with_hyperparamerter_tuning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Credit_card_approval_banner}
              isBlog={false}
              title="Credit Card Approval"
              description="This tool assesses an individual’s likelihood of qualifying for a credit card approval prior to formal application. Unlike traditional processes that trigger a hard credit inquiry—a step that temporarily lowers credit scores—this solution evaluates eligibility using predictive algorithms without impacting the user’s credit history. Designed for financial planning, it enables potential applicants to gauge their approval odds risk-free, empowering them to make informed decisions while preserving their credit health."
              ghLink="https://github.com/Elizabeth-Mwania/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://admission-prediction.readthedocs.io/en/latest/index.html"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects