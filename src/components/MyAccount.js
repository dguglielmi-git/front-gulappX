import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantForm from "./Account/RestaurantForm";
import UserForm from "./Account/UserForm";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  container: {
    marginTop: "70px",
  },
  datos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    width: "20%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  plates: {
    width: "75%",
  },
  input: {
    marginTop: "10px",
  },
}));

const sucursales = [
  { nombre: "Sucursal 1", ubicacion: "Lima 778" },
  { nombre: "Sucursal 2", ubicacion: "Malaver 2015" },
];

export default function NewForm() {
  const classes = useStyles();
  const [newDish, setNewDish] = React.useState(false);
  const [ubicacion, setUbicacion] = React.useState("");

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  if (loggedUser)
    return (
      <div className={classes.container}>
        {loggedUser.isRestaurant ? (
          <RestaurantForm
            sucursales={sucursales}
            ubicacion={ubicacion}
            newDish={newDish}
            setNewDish={setNewDish}
          />
        ) : (
          <UserForm />
        )}
      </div>
    );

  return null;
}
