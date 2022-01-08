import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LOGIN_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
  //для изменения значений состояния
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(LOGIN_ROUTE);
  };

  return (
    <Navbar
      classname="bg-purple"
      variant="dark"
      style={{ backgroundColor: "#9370DB" }}
    >
      <Container>
        <Navbar.Brand>MyDanceCamp</Navbar.Brand>
        {user.isAuth && (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Log out
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
