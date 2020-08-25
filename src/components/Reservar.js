import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import BotoneraReserva from "./Reservar/BotoneraReserva";
import ListadoHoras from "./Reservar/ListadoHoras.js";
import Smoking from "./Reservar/Smoking.js";
import Calendar from "./Utils/Calendar.js";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "150px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "380px",
    height: "580px",
    overflow: "hidden",
    background: "#F3EFEF",
  },
  titulo: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "15px",
    marginBottom: "-15px",
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
  const [selectedDate, setSelectedDate] = React.useState(new Date());

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

  const confirmar = () => {
    if (tableState === "vacio") {
      alert("No ha seleccionado un horario.");
    } else {
      var fechaSeleccionada = format(new Date(selectedDate), "dd/MM/yyyy");
      selected(
        "Reserva Confirmada",
        tableState + " con fecha: " + fechaSeleccionada
      );
      setModalDishes(false);
    }
  };
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
        <Typography
          variant="h5"
          style={{
            fontFamily: "Krona One",
            color: "black",
            textShadow: "0 0 0.1em #87F, 0 0 0.1em #87F, 0 0 0.1em #87F",
          }}
        >
          Haga su Reserva
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <TextField
            id="cantPersonas"
            className={estilos.textField}
            label="Cantidad Personas"
            margin="normal"
          />
        </div>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ListadoHoras horarios={horarios} setTableState={setTableState} />
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
      <BotoneraReserva
        setModalDishes={setModalDishes}
        selected={selected}
        confirmar={confirmar}
      />
      <hr></hr>
    </div>
  );
}
