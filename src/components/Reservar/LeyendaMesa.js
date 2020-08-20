import React from 'react';
import Typography from '@material-ui/core/Typography';

function mesaSeleccionada(tableState) {
    if (tableState === 'vacio') return null;
    return (
        `Se ha seleccionado una reserva para las: ${tableState}. Para finalizar pulse el botón Confirmar o Cancelar para anular.`
    )
}

export default function LeyendaMesa({ tableState }) {
    return (
        <div style={{width:'360px'}}>
            <Typography variant="subtitle2" style={{ color: 'blue' }}> {mesaSeleccionada(tableState)} </Typography>
        </div>
    );
}