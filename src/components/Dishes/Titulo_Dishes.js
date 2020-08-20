import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles({
    headerContent: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        marginBottom: "24px",
        fontFamily: 'Oswald',
        backgroundColor: "#f7eecb",
        padding: "10px"
    },
    subtitulo: {
        display: "flex",
        width: '100vw',
        flexDirection: "column"
    },
    calificacionEstrellas: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "flex-end",
        width: "125px",
    },
    ubicacion: {
        paddingTop: "5px",
        // width: "274px",
        justifyContent: "flex-start"
    },
    blurred: {
        color: "transparent",
        textShadow: "5px 5px 5px rgba(0,0,0,0.3)",
    }
});

export default function Titulo_Dishes({
    nombrePlato,
    restaurant,
    ubicacion,
    average,
    distance
}) {

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    const estilos = useStyles();

    return (
        <div className={estilos.headerContent}>
            <Typography variant="h4" component="h2" style={{ fontFamily: 'Oswald', }}>
                {nombrePlato}
            </Typography>

            <Typography className={!loggedUser ? estilos.blurred : ""} variant="subtitle1" component="h6" style={{ fontFamily: 'Oswald', }}>
                {restaurant} - {ubicacion} ({distance})
            </Typography>
            {/* <Box component="fieldset" borderColor="transparent"> */}
            <Rating value={average} readOnly />
            {/* </Box> */}
        </div>
    );
}