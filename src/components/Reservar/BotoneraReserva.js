import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function BotoneraReserva({ setModalDishes }){

    const estilos = useStyles();

    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center',  marginTop:'20px', width: '400px' }}>
            <Button color="primary" className={estilos.button}
            onClick={() => setModalDishes(false)}>
                Confirmar
            </Button>
            <Button color="primary" className={estilos.button}
                 onClick={() => setModalDishes(false)}> 
                Cancelar
            </Button>
        </div>
    );
}