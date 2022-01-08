import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Admins = observer(() => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8200/users/admin-list")
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
      <Container>
        <Button
          onClick={() => setClicked(!clicked)}
          style={{ margin: "20px 0" }}
        >
          Click to get help from admins
        </Button>
        {clicked ? (
          <div>
            {items.map((item, index) => (
              <p style={{ paddingBottom: "5px" }}>
                {index + 1}. {item}
              </p>
            ))}
          </div>
        ) : null}
      </Container>
    );
  }
});

export default Admins;
