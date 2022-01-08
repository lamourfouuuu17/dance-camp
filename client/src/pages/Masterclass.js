import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MASTERCLASSDESC_ROUTE } from "../utils/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FormUser from "./FormUser";
import Admins from "./Admins";

const Masterclass = observer(() => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8100/shop")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="products__wait">Завантаження...</div>;
  } else {
    return (
      <Container style={{ padding: "30px" }}>
        <h2 style={{ margin: "10px 0 50px", textAlign: "center" }}>
          Timetable
        </h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Style</th>
              <th>Style description (tap to read more)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td>{item.category}</td>
                <td>
                  <NavLink to={MASTERCLASSDESC_ROUTE}>
                    {item.description}
                  </NavLink>
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Fill the form to register
        </h2>

        <FormUser />
        <Admins />

        <div style={{ marginTop: "90px", textAlign: "center" }}>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#9370DB", fontSize: "30px" }}
            />
          </a>

          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#9370DB", fontSize: "30px", marginLeft: "20px" }}
            />
          </a>

          <a href="#">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#9370DB", fontSize: "30px", marginLeft: "20px" }}
            />
          </a>
        </div>
      </Container>
    );
  }
});

export default Masterclass;
