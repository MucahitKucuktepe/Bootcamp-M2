import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Postclass = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [data, setData] = useState({ username: "", email: "", password: "" });

  // const handleUsername = (e) => {
  //   console.log(e.target.value);
  //   setUsername(e.target.value);
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`
username: ${username},
password: ${password},
email: ${email}
`);
setData({ username: "", email: "", password: "" });
  };
  const { username, password, email } = data;
  const handleData = (e) => {
    console.log(e.target.id);
    setData({ ...data, [e.target.id]: e.target.value });
    console.log(data);
  };
  return (
    <Form className="container mt-5" onSubmit={handleFormSubmit}>
      <h1 className="text-success">FORMS</h1>
      <Form.Group className="mb-3">
        <Form.Label>
          Hello <span> {username} </span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onChange={handleData}
          value={username}
          id="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>
          Email address: <span>{email}</span>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleData}
          value={email}
          id="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password: {password} </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleData}
          value={password}
          id="password"
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Postclass;
