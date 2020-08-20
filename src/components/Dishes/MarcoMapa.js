import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MediosPago from './MediosPago.js';

const useStyles = makeStyles({
    marcoMapa: {
        display: 'block',
        width: '340px',
        flexWrap: "wrap",
    },
});

export default function MarcoMapa({ imagenUbicacion, mediosPago }) {

    const estilos = useStyles();

    return (
        <div className={estilos.marcoMapa}>
            <Typography style={{ paddingBottom: "5px", textAlign: 'center' }} variant="h5" component="h2">
                Ubicación
            </Typography>
            {/* <img style={{ paddingLeft: "15%" }} width="250" height="219" 
            src={require(`../../images/${imagenUbicacion}`)} alt=''></img> */}
        </div>
    );
}