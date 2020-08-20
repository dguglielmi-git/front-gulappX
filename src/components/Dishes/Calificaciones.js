import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Imprime from "../../Imprime.js";

const useStyles = makeStyles({
    marcoCalificaciones: {
        display: 'block',
        marginTop: '15px',
        width: "250px",
    },

});

export default function Calificaciones({ calificaciones }) {
    console.log("calif", calificaciones)
    const estilos = useStyles();

    return (
        <div className={estilos.marcoCalificaciones}>
            <Typography style={{ paddingLeft: "0px", marginTop: '15px', }} component="h2" variant="h6">
                Calificaciones
                </Typography>
            {calificaciones.map((calif, index) =>
                <Imprime
                    parametro="calificaciones"
                    nombre={calif.nombre}
                    imagen={calif.imagen}
                />
            )}
        </div>
    );
}