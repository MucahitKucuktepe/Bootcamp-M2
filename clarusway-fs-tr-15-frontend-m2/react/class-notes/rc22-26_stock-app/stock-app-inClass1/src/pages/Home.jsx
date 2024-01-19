import React, { useEffect } from "react";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import KPI from "../components/KPI";
import Charts from "../components/Charts";

const Home = () => {
  return (
    <>
      <KPI />
      <Charts />
    </>
  );
};

export default Home;
