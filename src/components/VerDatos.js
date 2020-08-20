import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { typography } from '@material-ui/system';

const btnStyles = makeStyles(theme => ({
    button: {
      //  margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const useStyles = makeStyles({
    mainFrame: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '550px',
        height: '600px',
        marginLeft: '10px',
    },
    dataFrame: {
        display: 'flex',
        marginTop: '10px',
        flexDirection: 'column',
        width: '520px',
        overflowW: 'hidden',
        background: 'rgba(146, 168, 251, .4)',
        borderRadius: '5px 5px 5px 5px',
    },
});


export default function VerDatos({ setModalDishes }) {

    const estilos = useStyles();
    const btnEstilo = btnStyles();

    const datosUbicacion = {
        nombreRestaurant: "Uade Super Restaurant",
        telefono: "+54 9 11-11122-3344 / 4422-9929",
        horario: `(Lun-Jue 10:00-15:00 / 19:00-23:00) - (Vie-Dom 10:00-15:00 / 19:00-02:00)`,
        email: "uadesuper_restaurant@uade.edu.ar",
        website: "http://www.uade.edu.ar",
        link: 'https://www.google.com/maps/place/UADE/@-34.6173554,-58.3817769,15z/data=!4m2!3m1!1s0x0:0x1a2dc24cbca665a7?sa=X&ved=2ahUKEwieueHOr9vlAhVGGbkGHT4ZAxgQ_BIwCnoECA0QCA',
    };

    return (
        <div className={estilos.mainFrame}>
            <Typography variant="h5" >{datosUbicacion.nombreRestaurant}</Typography>
            <Typography variant='overline'>Ubicación y Datos de Contacto</Typography>

            <a href={datosUbicacion.link}><img src={require(`../images/ubicacionResto.png`)}
                to={datosUbicacion.link} height="321" width="510"></img></a>
            <div className={estilos.dataFrame}>
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <img src={require(`../images/icon/phone.png`)} height="25" width="25"></img>
                    <Typography style={{ marginLeft: '5px' }} variant="subtitle2">{datosUbicacion.telefono}</Typography>
                </div>
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <img src={require(`../images/icon/time.png`)} height="25" width="25"></img>
                    <Typography style={{ marginLeft: '5px' }} variant="subtitle2">{datosUbicacion.horario} </Typography>
                </div>
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <img src={require(`../images/icon/email.png`)} height="25" width="25"></img>
                    <Typography style={{ marginLeft: '5px' }} variant="subtitle2">{datosUbicacion.email} </Typography>
                </div>
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    <img src={require(`../images/icon/website.png`)} height="25" width="25"></img>
                    <Typography style={{ marginLeft: '5px' }} variant="subtitle2">{datosUbicacion.website} </Typography>
                </div>

            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'left', width: '100px' }}>
                <Button color="primary" onClick={() => setModalDishes(false)} className={btnEstilo.button}>
                    Cerrar
                </Button>
            </div>
        </div>
    );
}