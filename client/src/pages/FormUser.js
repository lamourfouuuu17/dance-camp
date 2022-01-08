import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Button, Form } from "react-bootstrap";
import { Axios } from "axios";
import axios, * as others from "axios";

const FormUser = observer(() => {
  const url = "http://localhost:8200/users/add";
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    role: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        role: data.role,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <Container>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            value={data.name}
            placeholder="Jhon"
            id="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            value={data.surname}
            placeholder="Nilson"
            id="surname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            value={data.email}
            type="email"
            placeholder="user@user.com"
            id="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            value={data.password}
            type="password"
            placeholder="Password"
            id="password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Who are you?</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            value={data.role}
            placeholder="User"
            id="role"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
});

export default FormUser;
