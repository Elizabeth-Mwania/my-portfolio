import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Credit_card_approval_banner from "../assets/projects/Credit_card_approval_banner.png";
import project from "../assets/projects/project.jpeg";
import graduate from "../assets/projects/graduate.png";
// import krypto from "../assets/projects/krypto.png";
import crypto from "../assets/projects/crypto.png";
import abtest from "../assets/projects/week.png"
import blood from "../assets/projects/blood_campaign.jpg"

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
              description="This is ongoing project to analyse Cryptography data from Yahoo API. In this project, 
              I've analyzd data from Yahoo Finance of three popular cryptocurrencies to date.The main technologies used
              are: Panda, Dash and Plotly to create dashboard, yfinance to fetch cryptocurrency data from Yahoo Finance,
              Pandas & NumPy for data manipulation and calculations"
              ghLink="https://github.com/Elizabeth-Mwania/Crypto_Analysis_with_Yahoo_API"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Credit_card_approval_banner}
              isBlog={false}
              title="Credit Card Approval"
              description="This app predicts if an applicant will be approved for a credit card 
              or not. Each time there is a hard enquiry your credit score is affected negatively. 
              This app predict the probability of being approved without affecting your credit score.
               This app can be used by applicant who wants to find out if they will be approved for a
                credit card without affecting their credit score. The data sourse id from kaggle"
              ghLink="https://github.com/Elizabeth-Mwania/"
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
              imgPath={blood}
              isBlog={false}
              title="Blood Campaign Dashboard"
              description=" This project implements a comprehensive dashboard for blood donation campaign analysis and management. The dashboard visualizes and analyzes blood donation data to provide valuable insights for optimizing blood donation campaigns. It allows campaign organizers to make data-driven decisions to improve the success of future blood donation campaigns. The key functionalities include Geographic Distribution, Health Conditions & Eligibility, Clustering Donor Profiles and Sentiment Analysis "
              ghLink="https://github.com/Elizabeth-Mwania/Blood_donation"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abtest}
              isBlog={false}
              title="AB-Testing: Free Trial Screener"
              description="This project focuses on an A/B testing experiment conducted to optimize student enrollment decisions for their courses. The course overview page offers two options Start Free Trial – Requires credit card details and enrolls the student in a 14-day free trial for the paid course. If not canceled, the student is charged automatically. Access Course Materials - Grants free access to videos and quizzes but excludes coaching support, project feedback, and certification. The project analyses user behavior, conversion rates, and engagement metrics to determine whether this change leads to better course completion rates and more satisfied learners"
              ghLink="https://github.com/Elizabeth-Mwania/malaria_detection_with_hyperparamerter_tuning"
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
        </Row>
      </Container>
    </Container>
  )
}

export default Projects