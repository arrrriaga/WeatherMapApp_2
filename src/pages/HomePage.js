import React from "react";
import Chart from "../components/Chart";
import Map from "../components/Map";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <h1>Hola mundo</h1>
      <Map />
      <Chart />
    </>
  );
};

export default HomePage;
