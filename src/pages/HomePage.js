import React from "react";
import "./pages.css";
import TempChart from "../components/TempChart";
import OtherChart from "../components/OtherChart";
import Form from "../components/Form";
import { Col, Container, Row } from "react-bootstrap";
import MapComponent from "../components/MapComponent";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <h1 className="text-center">Mapa interactivo</h1>
        <h2 className="text-center">
          Muestra en tiempo real las condiciones meteorológicas en el mundo
        </h2>
        <p className="text-center">
          Mover marcador rojo para seleccionar en automático las coordenadas a
          analizar.
        </p>
      </Row>
      <Row>
        <Form />
      </Row>
      <Row className="mapAndData">
        <Col className="mapContainer">
          <MapComponent />
        </Col>
        <Col className="chartsContainer">
          <Row className="chart1">
            <TempChart />
          </Row>
          <Row className="chart2">
            <OtherChart />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
