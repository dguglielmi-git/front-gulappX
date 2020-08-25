import React from "react";
import Reservar from "../Reservar";
import Delivery from "../Delivery/Delivery";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const btnStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const useStyles = makeStyles({
  marcoBotones: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "0px auto",
  },
});

export default function Botonera({
  validateLogin,
  setModalState,
  setModalDishes,
  setContent,
  precio,
  selected,
}) {
  const handleClick = (content) => {
    const logged = validateLogin();
    if (!logged) {
      setModalState(true);
    } else {
      setContent(content);
      setModalDishes(true);
    }
  };

  const estilos = useStyles();
  const btnestilo = btnStyles();

  return (
    <div className={estilos.marcoBotones}>
      <Button
        variant="contained"
        color="primary"
        className={btnestilo.button}
        onClick={() => handleClick(<Delivery precio={precio} />)}
      >
        Delivery
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={btnestilo.button}
        onClick={() =>
          handleClick(
            <Reservar setModalDishes={setModalDishes} selected={selected} />
          )
        }
      >
        Reservar Mesa
      </Button>
    </div>
  );
}
