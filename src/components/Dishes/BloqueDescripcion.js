import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MapContainer from '../Map/Map'
import Botonera from './Botonera.js';

const useStyles = makeStyles({
    marcoDescripcion: {
        display: "flex",
        width: "100%",
        marginLeft: '1%',
        paddingLeft: "24px",
        // width: '550px',
        flexDirection: "column",
        borderLeft: "1px solid #BFBABB",
        fontFamily: 'Oswald'
    },
});

export default function BloqueDescripcion({ descripcion, validateLogin, setModalState, setModalDishes, setContent, geo, distance, precio }) {

    const estilos = useStyles();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    return (
        <div className={estilos.marcoDescripcion}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ marginTop: "0px" }}>
                    Descripción del Plato
                </h2>
                <Botonera
                    validateLogin={validateLogin}
                    setModalState={setModalState}
                    setModalDishes={setModalDishes}
                    setContent={setContent}
                    precio={precio}
                />
            </div>
            <p >
                {descripcion}
            </p>
            <h3>Ubicación:</h3>
            A {distance} de tu ubicación
            {loggedUser && <MapContainer geo={geo} />}
            {!loggedUser && <div style={{ width: "1200px", height: "300px", backgroundColor: "#f8f8f8", display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center" }}>Debe iniciar sesión para poder ver la ubicación del lugar.</div>}
        </div>
    );
}