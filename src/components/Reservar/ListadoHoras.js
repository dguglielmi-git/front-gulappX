import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListaHorario from './ListaHorario.js';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '200px',
        height: "200px",
        
        backgroundColor: theme.palette.background.paper,
        overflowY: 'scroll',
        marginTop:'10px',
    },
}));

export default function ListadoHoras({ horarios, setTableState, selected }) {

    const estilos = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    
    const handleListItemClick = (event, index, valor, setTableState) => {
        setSelectedIndex(index);
        setTableState(`Se ha seleccionado una reserva para las: ${valor} `);
    };

    return (
        <div className={estilos.root}>
            <ListSubheader>
                <Typography variant="subtitle2">Horarios Disponibles:</Typography>
            </ListSubheader>
            {horarios.map((hh, index) =>
                <ListaHorario
                    selec={selectedIndex === hh.id}
                    onclick={event => handleListItemClick(event, hh.id, hh.hora, setTableState)}
                    texto={hh.hora}
                />
            )}
        </div>
    );
}