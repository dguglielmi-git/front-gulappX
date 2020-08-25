import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Imprime from "./Imprime.js";

const btnStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
}));

const fontStyles = makeStyles({
  ubicacion: {
    paddingTop: "5px",
    width: "274px",
    justifyContent: "flex-start",
  },
});

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  app: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "65px",
  },
  mainFrame: {
    display: "flex",
    height: "5vh",
    paddingTop: "30px",
    flexWrap: "wrap",
  },
  secondFrame: {
    display: "flex",
    height: "330px",
    width: "100vw",
    flexWrap: "wrap",
  },
  marcoImagen: {
    display: "flex",
    height: "300px",
    width: "400px",
    maxWidth: "40vw",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  subtitulo: {
    display: "flex",
    width: "100vw",
    height: "50px",
    flexWrap: "wrap",
  },
  precio: {
    display: "flex",
    width: "90px",
    height: "60px",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  },
  marcoDescripcion: {
    display: "flex",
    position: "relative",
    marginLeft: "1%",
    width: "550px",
    flexWrap: "wrap",
    borderLeft: "1px solid #BFBABB",
  },
  marcoMapa: {
    display: "block",
    width: "350px",
    flexWrap: "wrap",
  },
  marcoDescriMapa: {
    display: "flex",
    height: "330px",
  },
  marcoCalificaciones: {
    display: "block",
    position: "relative",
    width: "400px",
    marginTop: "-100px",
  },
  boxCalificacion: {
    display: "flex",
    paddingLeft: "20px",
  },
  marcoBotones: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "800px",
  },
  marcoMediosPago: {
    display: "block",
    heigth: "100px",
    border: "1px solid",
    width: "100vw",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  marcoMediosPagoIntern: {
    display: "flex",
    heigth: "100px",
    width: "400px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  marcoMediosPagoIconos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "400px",
    marginBottom: "10px",
  },
  marcoReviews: {
    display: "block",

    borderTop: "1px solid #BFBABB",
  },
  calificacionEstrellas: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    width: "125px",
  },
});

export default function ProdResult({ resultado }) {
  const estilos = useStyles();
  const fuentesEstilos = fontStyles();
  const btnestilo = btnStyles();

  const {
    nombrePlato,
    ubicacion,
    imagenRanking,
    imagenPlato,
    precio,
    descripcion,
    imagenUbicacion,
    mediosPago,
    reviews,
    calificaciones,
  } = resultado;

  return (
    <div className={estilos.app}>
      <div className={estilos.mainFrame}>
        <Typography variant="h4" component="h2">
          {nombrePlato}
        </Typography>
      </div>

      <div className={estilos.subtitulo}>
        <Typography
          className={fuentesEstilos.ubicacion}
          variant="subtitle1"
          component="h4"
        >
          Ubicado en {ubicacion}
        </Typography>
        <div className={estilos.calificacionEstrellas}>
          <img
            height="26"
            width="125"
            src={require(`./images/stars/${imagenRanking}`)}
            alt=""
          ></img>
        </div>
      </div>

      <div className={estilos.secondFrame}>
        <div className={estilos.marcoImagen}>
          <img
            height="250"
            width="400"
            src={require(`./images/${imagenPlato}`)}
            alt=""
          ></img>
          <div className={estilos.precio}>
            <Typography variant="h5" component="h2">
              Precio:{" "}
            </Typography>
            <Box
              style={{ color: "#152EE4" }}
              fontWeight="fontWeightBold"
              fontSize={34}
              m={0}
            >
              ${precio}
            </Box>
          </div>
        </div>

        <div className={estilos.marcoDescriMapa}>
          <div className={estilos.marcoDescripcion}>
            <Typography
              style={{ paddingLeft: "10px" }}
              variant="h5"
              component="h2"
            >
              Descripción del Plato
            </Typography>
            {descripcion.map((desc) => (
              <Typography
                style={{ marginTop: "-50px", paddingLeft: "10px" }}
                variant="body2"
                component="h2"
              >
                {desc}
              </Typography>
            ))}
          </div>

          <div className={estilos.marcoMapa}>
            <Typography
              style={{ paddingBottom: "5px", textAlign: "center" }}
              variant="h5"
              component="h2"
            >
              Ubicación
            </Typography>
            <img
              style={{ paddingLeft: "15%" }}
              width="250"
              height="219"
              src={require(`./images/${imagenUbicacion}`)}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        width="300px"
        heigth="100px"
      >
        <div style={{ position: "relative", width: "400px" }}></div>
        <div className={estilos.marcoBotones}>
          <Button
            variant="contained"
            color="primary"
            className={btnestilo.button}
          >
            Hacer Pedido
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={btnestilo.button}
          >
            Reservar Mesa
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={btnestilo.button}
          >
            Datos del Lugar
          </Button>
        </div>
      </div>

      <div className={estilos.marcoCalificaciones}>
        <Typography style={{ paddingLeft: "10px" }} component="h2" variant="h6">
          Calificaciones
        </Typography>
        {calificaciones.map((calif, index) => (
          <Imprime
            parametro="calificaciones"
            nombre={calif.nombre}
            imagen={calif.imagen}
          />
        ))}
      </div>

      <div className={estilos.marcoMediosPago}>
        <div className={estilos.marcoMediosPagoIntern}>
          <Box fontWeight="fontWeightBold" m={1}>
            Medios de Pago
          </Box>
        </div>
        <div className={estilos.marcoMediosPagoIconos}>
          {mediosPago.map((medios, index) => (
            <img
              width="50"
              height="40"
              src={require(`./images/mediosPago/${medios.imagen}`)}
              alt=""
            ></img>
          ))}
        </div>
      </div>

      <div className={estilos.marcoReviews}>
        Opiniones
        {reviews.map((rv, index) => (
          <Imprime
            parametro="review"
            nombreUsuario={rv.nombreUsuario}
            opiniones={rv.opiniones}
            fotoUsuario={rv.fotoUsuario}
            comentarioReview={rv.comentario}
          />
        ))}
      </div>
    </div>
  );
}
