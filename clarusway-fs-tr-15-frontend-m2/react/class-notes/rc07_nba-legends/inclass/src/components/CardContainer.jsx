// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import { useState } from "react";

import Col from "react-bootstrap/esm/Col";
import PlayerCard from "./PlayerCard";
import FormComponent from "./FormComponent";

const CardContainer = () => {
  const [search, setSearch] = useState("");

const handleChange =(e)=>{
    setSearch(e.target.value)
      console.log(search);
}
const filteredData=data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase().trim()))
  return (
    <>
      {/* <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      /> */}
      <FormComponent handleChange={handleChange} />

      <Container className="rounded my-4 p-3 card-container ">
        <Row className="justify-content-center g-3">
          {/* {data.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))} */}
          {filteredData.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
