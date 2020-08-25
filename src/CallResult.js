import React from 'react';
import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ProdResult from './prodResult.js';
import Resultado from './resultado.json';

const useStyles = makeStyles({
  app: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});


function CallResult() {
  const estilos = useStyles();

  return (
    <div className={estilos.app}>
      <header className="App-header"></header>
      {Resultado.map((resul, index) =>
        <ProdResult 
          nombrePlato={resul.nombrePlato}
          ubicacion={resul.ubicacion}
          imagenRanking={resul.imagenRanking}
          imagenPlato={resul.imagenPlato}
          precio={resul.precio}
          descripcion={resul.descripcion}
          imagenUbicacion={resul.imagenUbicacion}
          mediosPago={resul.mediosPago}
          reviews={resul.reviews}
          calificaciones={resul.calificaciones}
        />
        )}
      
    </div>

  );
}

export default CallResult;
