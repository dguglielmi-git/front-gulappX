import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  boxCalificacion: {
    display: "flex",
  },
});

export default function Imprime({
  parametro,
  nombre,
  imagen,
  nombreUsuario,
  opiniones,
  comentarioReview,
  fotoUsuario,
}) {
  const estilos = useStyles();
  if (parametro === "calificaciones") {
    return (
      <div className={estilos.boxCalificacion}>
        <img
          width="80"
          height="17"
          src={require(`./images/stars/${imagen}`)}
          alt =""
        ></img>
        <Typography
          style={{ paddingLeft: "10px" }}
          component="h6"
          variant="subtitle2"
        >
          {nombre}
        </Typography>
      </div>
    );
  }
  if (parametro === "descripcion") {
    return <div></div>;
  }
  if (parametro === "review") {
    return (
      <div className={estilos.boxCalificacion}>
        <div>
          <Typography component="h6" variant="subtitle2">
            <Box fontWeight="fontWeightBold" m={1}>
              {nombreUsuario}
            </Box>
          </Typography>
          <div style={{ width: "800px" }}>
            <Box display="flex" p={1} bgcolor="background.paper">
              {comentarioReview}
            </Box>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
