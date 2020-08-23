import React, { useEffect, useRef } from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Titulo from './Titulo_Dishes.js';
import MarcoImagen from './MarcoImagen.js';
import BloqueDescripcion from './BloqueDescripcion.js';
import {Toast} from 'primereact/toast';
//import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/themes/nova-accent/theme.css";
import 'primereact/resources/primereact.min.css';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import MarcoMapa from './MarcoMapa.js';
import Botonera from './Botonera.js';
import MediosPago from './MediosPago.js';
import Reviews from './Reviews.js';
import Modal from '../Modal';
import MapContainer from '../Map/Map'

const fontStyles = makeStyles({
    ubicacion: {
        paddingTop: "5px",
        width: "274px",
        justifyContent: "flex-start"
    },
});

const useStyles = makeStyles({
    app: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: "65px",
        fontFamily: 'Oswald',
    },
    secondFrame: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: '300px',
        maxWidth: '1200px',
        flexWrap: 'wrap',
        marginLeft: "400px"
    },
    marcoDescriMapa: {
        display: "flex",
        height: '330px',
    },
    marcoReview: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100vw',
        marginTop: '40px',
        paddingBottom: '40px',
        backgroundColor: '#F0F2FC',
        backgroundImage: "linear-gradient(to bottom, white, #DFE1EB)",
    },
});


export default function Dishes({
    validateLogin,
    setModalState,
    match
}) {
    const estilos = useStyles();
    const refToast = useRef();
    const [modalDishes, setModalDishes] = React.useState(false);
    const [content, setContent] = React.useState();
    const [dish, setDish] = React.useState({});
    const [comments, setComments] = React.useState([]);
    const [average, setAverage] = React.useState({
        avgAttention: 0,
        avgLocation: 0,
        avgPresentation: 0,
        avgPrice: 0,
        avgSize: 0,
        avgTotal: 0,
    });

    useEffect(() => {
        fetchDish();
        fetchComments();
        fetchAverage();
    }, [])


    const selected = (_summary, _detail) => {
        let msg = {
            severity: 'success',
          summary: 'Reserva Confirmada',
          detail: _detail,
        };
        refToast.current.show(msg);
      };

    const fetchDish = async () => {
        // setLoading(true);

        const payload = {
            "dishId": match.params.id,
            "address": "Lima 778, buenos aires, argentina"
        }
        try {
            await fetch("http://localhost:47000/apiGulappX/getDishesbyId", {
                method: 'POST',
                credential: 'include',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then((data) => {
                    console.log("PLATO", data[0])
                    setDish(data[0]);
                    // console.log(data)
                    // setResultState(true);
                    // setLoading(false);
                })
                ;
        }
        catch (e) {
            console.log("Hubo un error al buscar el plato", e)
        }
    }

    const fetchAverage = async () => {
        // setLoading(true);

        const payload = {
            "dishId": match.params.id,
        }
        try {
            await fetch("http://localhost:47000/apiGulappX/getDishAveragebyId", {
                method: 'POST',
                credential: 'include',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then((data) => {
                    console.log("Average", data)
                    setAverage(data);
                    // console.log(data)
                    // setResultState(true);
                    // setLoading(false);
                })
                ;
        }
        catch (e) {
            console.log("Hubo un error al buscar el plato", e)
        }
    }

    const fetchComments = async () => {
        // setLoading(true);

        const payload = {
            "dishId": match.params.id,
        }
        try {
            await fetch(`http://localhost:47000/apiGulappX/getCommentsbyId`, {
                method: 'POST',
                credential: 'include',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    setComments(data)
                    // setResultState(true);
                    // setLoading(false);
                })
                ;
        }
        catch (e) {
            console.log("Hubo un error al buscar los comentarios", e)
        }
    }

    if (Object.keys(dish).length > 0) {
        return (
            <div className={estilos.app}>
                <Toast ref={refToast} position="bottom-right" style={{zIndex:'100', opacity:1}}/>
                <Titulo
                    nombrePlato={dish.dishName}
                    average={average.avgTotal}
                    restaurant={dish.restaurantName}
                    ubicacion={dish.restaurantAddress}
                    distance={dish.distance}
                />
                <MarcoImagen
                    imageUrl={dish.imageUrl}
                    precio={dish.pricing}
                    calificaciones={average}

                />
                <Divider />
                <div className={estilos.secondFrame}>
                    {/* <div className={estilos.marcoDescriMapa}> */}
                    <BloqueDescripcion descripcion={dish.dishDetailedDesc} validateLogin={validateLogin}
                        setModalState={setModalState}
                        setModalDishes={setModalDishes}
                        setContent={setContent}
                        geo={dish.geo}
                        distance={dish.distance}
                        precio={dish.pricing}
                        selected={selected}
                    />
                    {/* <MarcoMapa imagenUbicacion={dish.imagenUbicacion} mediosPago={dish.mediosPago} /> */}
                    {/* </div> */}
                    {/* <Botonera
                        validateLogin={validateLogin}
                        setModalState={setModalState}
                        setModalDishes={setModalDishes}
                        setContent={setContent}
                    /> */}
                </div>
                {/* <div style={{ position: "relative", width: "100%", height: "100%", zIndex: "200" }}> */}
                {/* <MapContainer /> */}
                {/* </div> */}

                {/* <MediosPago mediosPago={dish.mediosPago} /> */}
                {/* <Divider /> */}
                <Reviews reviews={comments} dishId={match.params.id} fetchComments={fetchComments} fetchAverage={fetchAverage} />
                <Modal
                    state={modalDishes}
                    onClose={() => setModalDishes(false)}
                    content={content} />
            </div>
        )
    }
    return null;
}
