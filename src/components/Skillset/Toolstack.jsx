import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // SiKeycloak,
  SiWindowsterminal,
  SiMicrosoftexcel,
  SiDocker,
  SiMicrosoftazure,
  SiPowerbi
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsterminal />
      </Col>
    </Row>
  );
}

export default Toolstack;
