import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    rootLista: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function ListaHorario({ selec, onclick, texto }) {
    const estilos = useStyles();    

    return (
        <ListItem
            button
            selected={selec}
            onClick={onclick}
        >
        <ListItemText primary={texto} />
        </ListItem>
        
    );
}