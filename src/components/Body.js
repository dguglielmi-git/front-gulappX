import React from 'react';
import { makeStyles } from '@material-ui/styles'
import ImgCard from './Card';
import { Link } from 'react-router-dom'
import Search from './Search';
import Loader from './Utils/Loader'
import Modal from './Modal'
import { Divider } from '@material-ui/core';
import Resultado from '../resultado.json'
import Resultado2 from '../resultado2.json'
import Resultado3 from '../resultado3.json'
import HowItWorks from './HowItWorks';
import logo from '../images/logo.png';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import Footer from '../components/Footer/Footer';

const useStyles = makeStyles({
    body: {
        marginTop: "60px",
        fontFamily: 'Oswald',
        background: '#f7eecb',
        width: "100%",
        height: "350px"
    },
    results: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%"
    },
    sugerencias: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingBottom: "24px"
    },
    link: {
        textDecoration: "none"
    }
})


export default function Body({ validateLogin }) {

    const classes = useStyles();
    const [dishes, setDishes] = React.useState([]);

    const [resultState, setResultState] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");


    const handleClose = () => {
        setError(false);
    };

    const handleChange = e => {
        setSearchValue(e.target.value);
    }

    const fetchDishes = async () => {
        if (searchValue === "" || searchValue === " ") {
            setError(true);;
            setErrorMsg("Por favor ingresá un texto.")
        }
        else {
            setLoading(true);

            const payload = {
                "dishName": searchValue,
                "address": "Lima 775, Buenos Aires, Argentina"
            }
            try {
                const rutaBackend = localStorage.getItem("rutaBackend") + 'apiGulappX/getDishesbyName/'
                await fetch(rutaBackend, {
                    method: 'POST',
                    credential: 'include',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                    .then(res => res.json())
                    .then((data) => {
                        setDishes(data);
                        setResultState(true);
                        setLoading(false);
                        console.log("dishes", data)
                    })
                    ;
            }
            catch (e) {
                console.log("Hubo un error al buscar el plato", e)
            }
        }

    }

    let html = "";


    if (dishes.length > 0) {
        html =
            <div style={{ backgroundColor: "#f8f8f8" }}>
                Resultados para "{searchValue}"
                <div className={classes.results}>
                    {
                        resultState &&

                        dishes.map((result) =>
                            <Link to={`/dish/${result._id}`} className={classes.link}>
                                <ImgCard
                                    dish={result}
                                    validateLogin={validateLogin}
                                />
                            </Link>
                        )
                    }
                </div>
            </div>
    }
    else {
        html = <div style={{ marginTop: "10px" }}>No se han encontrado resultados para '{searchValue}'</div>
    }

    return (

        <div className={classes.body}>
            <Divider />
            <div className={classes.container}>
                <img src={logo} width="100px" style={{ borderRadius: "24px", border: "1px solid" }} />
                <h1 style={{ marginTop: "0px" }}>TU MEJOR PLATO AL ALCANCE DE UN CLICK.</h1>
                <Search
                    onChange={handleChange}
                    onSearch={fetchDishes}
                />
            </div>
            {loading && <Modal state={true} content={<Loader type="circular" />} />}

            <Divider />

            {!resultState && <HowItWorks />}

            <Divider style={{ marginTop: "24px" }} />

            {resultState && html}


            {!resultState && (
                <div style={{ backgroundColor: "#f8f8f8" }}><h2 style={{ marginTop: "0px", paddingTop: "5px", textAlign: "center" }}>Sugeridos para vos:</h2>
                    <div className={classes.sugerencias}>
                        <Link to={`/dish/5f3f531122faca6085937cda`} className={classes.link}>
                            <ImgCard
                                dish={Resultado}
                                validateLogin={validateLogin}
                            />
                        </Link>
                        <Link to={`/dish/5f3f50c422faca6085937cd9`} className={classes.link}>
                            <ImgCard
                                dish={Resultado2}
                                validateLogin={validateLogin}
                            />
                        </Link>
                        <Link to={`/dish/5f3dfb16ba4e5a5e681df31f`} className={classes.link}>
                            <ImgCard
                                dish={Resultado3}
                                validateLogin={validateLogin}
                            />
                        </Link>
                    </div>
                </div>
            )}

            <Footer />

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={error}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                // classes={{ root: classes.snackbar, paper: classes.snackbar, }}
                message={<span id="message-id">{errorMsg}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />

        </div>
    )

}