import React from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  marcoImagen: {
    position: "fixed",
    display: "flex",
    height: "430px",
    width: "400px",
    maxWidth: "40vw",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    marginTop: "150px",
  },
  precio: {
    display: "flex",
    width: "90px",
    height: "60px",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  },
  review: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
});

export default function MarcoImagen({ imageUrl, precio, calificaciones }) {
  const estilos = useStyles();

  return (
    <div className={estilos.marcoImagen}>
      <img
        style={{
          boxShadow: "0px 2px 2px 2px #DEDEDF",
          borderRadius: "1px 3px 3px 2px",
        }}
        height="250"
        width="400"
        src={imageUrl}
        alt=""
      ></img>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          <span className={estilos.review}>
            Atención{" "}
            <Rating name="avg1" value={calificaciones.avgAttention} readOnly />
          </span>
          <span className={estilos.review}>
            Ubicación{" "}
            <Rating name="avg2" value={calificaciones.avgLocation} readOnly />
          </span>
          <span className={estilos.review}>
            Presentación{" "}
            <Rating
              name="avg3"
              value={calificaciones.avgPresentation}
              readOnly
            />
          </span>
          <span className={estilos.review}>
            Precio{" "}
            <Rating name="avg4" value={calificaciones.avgPrice} readOnly />
          </span>
          <span className={estilos.review}>
            Tamaño{" "}
            <Rating name="avg5" value={calificaciones.avgSize} readOnly />
          </span>
        </div>
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
    </div>
  );
}
