import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DishesTable from "../DishesTable";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MasVendido from "../Restaurant/menuMasVendido";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "70px",
  },
  datos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    width: "20%",
    float: "left",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  plates: {
    width: "75%",
    float: "left",
    marginLeft: "24px",
    marginTop: "5px",
  },
  input: {
    marginTop: "10px",
  },
  mostSelled: {
    width: "100%",
    float: "left",
  },
}));

export default function RestaurantForm({ sucursales, newDish, setNewDish }) {
  const classes = useStyles();
  const [menu, setMenu] = React.useState({});
  const [state, setState] = React.useState({
    dishName: "",
    dishDescription: "",
    dishDetailedDesc: "",
    imageUrl: "",
    pricing: "",
  });

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchMenu();
  }, [menu]);

  const fetchMenu = async () => {
    const payload = {
      restaurantName: loggedUser.fullName,
      branchName: "Vicente Lopez",
    };
    try {
      const rutaBackend =
        localStorage.getItem("rutaBackend") + "apiGulappX/getRestaurantMenu";
      await fetch(rutaBackend, {
        method: "POST",
        credential: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          setMenu(data);
        });
    } catch (e) {
      console.log("Hubo un error al buscar los comentarios", e);
    }
  };

  const insertDish = () => {
    setNewDish(!newDish);
    insertNewDish();
  };

  const insertNewDish = async () => {
    const payload = {
      dishName: state.dishName,
      restaurantName: loggedUser.fullName,
      branchName: "Vicente Lopez",
      restaurantAddress: loggedUser.address,
      dishDescription: state.dishDescription,
      dishDetailedDesc: state.dishDetailedDesc,
      imageUrl: state.imageUrl,
      pricing: state.pricing,
    };
    try {
      const rutaBackend =
        localStorage.getItem("rutaBackend") + "apiGulappX/insertDish";
      await fetch(rutaBackend, {
        method: "POST",
        credential: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          setMenu(...menu, data);
        });
    } catch (e) {
      alert(
        "Hubo un error al insertar el nuevo plato. Por favor intente más tarde"
      );
      console.log("Hubo un error al insertar el nuevo plato", e);
    }
  };

  const handleChange = (input) => (e) => {
    setState({
      ...state,
      [input]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <div className={classes.container} style={{ backgroundColor: "#f7eecb" }}>
        <div className={classes.datos}>
          <h2>Mi Restaurante</h2>
          <TextField
            name="restaurante"
            variant="outlined"
            required
            fullWidth
            id="restaurante"
            label="Restaurante"
            value={loggedUser.fullName}
            className={classes.input}
            readonly
          />
          <Autocomplete
            options={sucursales}
            getOptionLabel={(option) => option.nombre}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Sucursal"
                variant="outlined"
                fullWidth
              />
            )}
            className={classes.input}
          />
          <TextField
            name="ubicacion"
            variant="outlined"
            required
            fullWidth
            id="ubicacion"
            label="ubicacion"
            value={loggedUser.address}
            className={classes.input}
          />
        </div>

        <div className={classes.plates}>
          <h2>Mi menu</h2>
          {newDish && (
            <div>
              <TextField
                name="plato"
                variant="outlined"
                required
                fullWidth
                id="plato"
                label="Nombre del Plato"
                autoFocus
                className={classes.input}
                onChange={handleChange("dishName")}
              />
              <TextField
                name="shortDesc"
                variant="outlined"
                required
                fullWidth
                id="shortDesc"
                label="Descripcion Corta"
                className={classes.input}
                onChange={handleChange("dishDescription")}
              />
              <TextField
                name="longDesc"
                variant="outlined"
                required
                multiline
                fullWidth
                id="longDesc"
                label="Descripcion Larga"
                className={classes.input}
                onChange={handleChange("dishDetailedDesc")}
              />
              <TextField
                name="url"
                variant="outlined"
                required
                fullWidth
                id="url"
                label="URL Imagen"
                className={classes.input}
                onChange={handleChange("imageUrl")}
              />
              <TextField
                name="precio"
                variant="outlined"
                required
                fullWidth
                id="precio"
                label="Precio"
                className={classes.input}
                onChange={handleChange("pricing")}
              />
              <div style={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => insertDish()}
                >
                  Guardar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setNewDish(!newDish)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          )}

          {!newDish && <DishesTable rows={menu} />}
          {!newDish && (
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
              onClick={() => setNewDish(!newDish)}
            >
              Nuevo Plato{" "}
            </Button>
          )}
        </div>
      </div>
      <div className={classes.mostSelled}>
        <h1>Tus mas vendidos: </h1>
        <div className={classes.container} style={{ marginTop: "24px" }}>
          <MasVendido />
          <MasVendido />
          <MasVendido />
        </div>

        <h1>Los mas vendidos de Gulappx: </h1>
        <div className={classes.container} style={{ marginTop: "24px" }}>
          <MasVendido />
          <MasVendido />
          <MasVendido />
        </div>
      </div>
    </React.Fragment>
  );
}
