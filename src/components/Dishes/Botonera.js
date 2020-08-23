import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Reservar from "../Reservar";
import Delivery from "../Delivery/Delivery";
import VerDatos from "../VerDatos";

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
          handleClick(<Reservar setModalDishes={setModalDishes} selected={selected} />)
        }
      >
        Reservar Mesa
      </Button>
      {/* <Button variant="contained" color="primary" className={btnestilo.button} onClick={() => handleClick(<VerDatos setModalDishes={setModalDishes} />)}>
                Datos del Lugar
            </Button> */}
    </div>
  );
}
