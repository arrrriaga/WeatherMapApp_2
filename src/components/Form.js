import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Form = () => {
  return (
    <>
      <Container>
        <fieldset disabled>
          <Row className="d-flex justify-content-center">
            <Col xs={4}>
              <label>LAT</label>
              <input
                type="text"
                id="coordsLAT"
                className=" form-control"
                placeholder="Disabled input"
              />
            </Col>
            <Col xs={4}>
              <label>LNG</label>
              <input
                type="text"
                id="coordsLNG"
                className=" form-control"
                placeholder="Disabled input"
              />
            </Col>
          </Row>
        </fieldset>
      </Container>
    </>
  );
};

export default Form;
