import React from "react";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import BotoneraReserva from "./Reservar/BotoneraReserva";
import ListadoHoras from "./Reservar/ListadoHoras.js";
import Smoking from "./Reservar/Smoking.js";
import LeyendaMesa from "./Reservar/LeyendaMesa.js";
import Calendar from "./Utils/Calendar.js";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "150px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    //justifyContent: 'center',
    width: "380px",
    height: "580px",
    overflow: "hidden",
  },
  titulo: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#5B3CE3",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    height: "50px",
  },
}));

export default function Reservar({ setModalDishes, selected }) {
  const estilos = useStyles();
  const [smokeState, setSmokeState] = React.useState(false);
  const [tableState, setTableState] = React.useState("vacio");

  // Codigo para Checkbox
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const click = () => {
    setSmokeState(!smokeState);
  };

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };
  // fin codigo checkbox

  const horarios = [
    { id: "1", hora: "20:00" },
    { id: "2", hora: "20:30" },
    { id: "3", hora: "21:00" },
    { id: "4", hora: "21:30" },
    { id: "5", hora: "22:00" },
    { id: "6", hora: "22:30" },
    { id: "7", hora: "23:00" },
    { id: "8", hora: "23:30" },
    { id: "9", hora: "00:00" },
    { id: "10", hora: "00:30" },
  ];

  return (
    <div className={estilos.root}>
      <div className={estilos.titulo}>
        <Typography variant="h5">Reservar una mesa</Typography>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div>
          <TextField
            id="cantPersonas"
            className={estilos.textField}
            label="Cantidad Personas"
            margin="normal"
          />
        </div>
        <Calendar />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ListadoHoras
            horarios={horarios}
            setTableState={setTableState}
            selected={selected}
          />
          <LeyendaMesa tableState={tableState} />
        </div>

        <div style={{ width: "200px" }}>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                value="checkedA"
                onChange={() => handleChange("chckedA")}
                onClick={() => click()}
              />
            }
            label=" Sector Fumador"
          />
        </div>
        <Smoking smokeState={smokeState} />
      </div>
      <BotoneraReserva setModalDishes={setModalDishes} />
      <hr></hr>
    </div>
  );
}
