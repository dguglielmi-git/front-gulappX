import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    marcoMediosPago: {
        display: 'block',
        heigth: "80px",
        width: "400px",
        flexWrap: 'wrap',
        marginTop: "50px",
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px #DFE1EB',
    },
    marcoMediosPagoIntern: {
        display: 'flex',
        heigth: "80px",
        width: "400px",
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    marcoMediosPagoIconos: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '400px',
        height: '60px',
        marginBottom: "10px",
    },
});

export default function MediosPago({ mediosPago }) {

    const estilos = useStyles();

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100vw'}}>
            <div className={estilos.marcoMediosPago}>
                <div className={estilos.marcoMediosPagoIntern}>
                    <Box fontWeight="fontWeightBold" m={1}>Medios de Pago</Box>
                </div>
                <div className={estilos.marcoMediosPagoIconos}>
                    {mediosPago.map((medios, index) =>
                        <img width="50" height="40" src={require(`../../images/mediosPago/${medios.imagen}`)}></img>
                    )}
                </div>
            </div>
        </div>
    );
}