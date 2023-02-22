import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LOGO from "../IMG/LOGO.png";

const NavBar = () => {
  return (
    <Container fluid>
      <Row
        style={{ backgroundColor: "rgb(28, 28, 75)" }}
        className="d-flex justify-content-center"
      >
        <Col className="d-flex justify-content-center">
          <img alt="Logo" src={LOGO} style={{ margin: "15px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
