import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  marcoMapa: {
    display: "block",
    width: "340px",
    flexWrap: "wrap",
  },
});

export default function MarcoMapa({ imagenUbicacion, mediosPago }) {
  const estilos = useStyles();

  return (
    <div className={estilos.marcoMapa}>
      <Typography
        style={{ paddingBottom: "5px", textAlign: "center" }}
        variant="h5"
        component="h2"
      >
        Ubicación
      </Typography>
    </div>
  );
}
