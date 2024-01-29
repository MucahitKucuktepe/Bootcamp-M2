import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList"
const Home = () => {
  return (
    <Container>
      <Typography>TodoApp with TypeScript</Typography>
      <AddTodoComp />
     <TodoList />
    </Container>
  );
};

export default Home;
