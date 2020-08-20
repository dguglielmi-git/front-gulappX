import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Add from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DishesTable from './DishesTable';
import MaterialTable from "material-table";
import Autocomplete from '@material-ui/lab/Autocomplete';
//import MasVendido from './Restaurant/menuMasVendido';
import RestaurantForm from './Account/RestaurantForm'
import UserForm from './Account/UserForm'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    container: {
        marginTop: "70px"
    },
    datos: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        width: "20%"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    plates: {
        width: "75%"
    },
    input: {
        marginTop: "10px"
    }
}));

const sucursales = [
    { nombre: 'Sucursal 1', ubicacion: 'Lima 778' },
    { nombre: 'Sucursal 2', ubicacion: 'Malaver 2015' },
]

export default function NewForm() {
    const classes = useStyles();
    const [newDish, setNewDish] = React.useState(false);
    const [ubicacion, setUbicacion] = React.useState('');


    const loggedUser = JSON.parse(localStorage.getItem("user"));

    // const userType = loggedUser.isRestaurant === 1 ? "";

    if (loggedUser) return (
        <div className={classes.container}>
            {
                loggedUser.isRestaurant ?
                    <RestaurantForm sucursales={sucursales} ubicacion={ubicacion} newDish={newDish} setNewDish={setNewDish} />
                    : <UserForm />
            }
        </div >
    )

    return null;
}