import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import MyAccount from "./components/MyAccount";
import Dishes from "./components/Dishes/Dishes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

function App() {
  const [menuState, setMenuState] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [modalLogoutState, setModalLogoutState] = React.useState(false);
  const [resultado, setResultado] = React.useState({});

  const login = async (user, pw) => {
    const payload = {
      username: user,
      password: pw,
    };
    // Desarrollo
    localStorage.setItem("rutaBackend", "http://localhost:47000/");
    localStorage.setItem(
      "rutaBackendLogin",
      "http://localhost:47001/"
    );

    // Produccion
   /* localStorage.setItem("rutaBackend", "https://backgulapp.herokuapp.com/");
    localStorage.setItem(
      "rutaBackendLogin",
      "https://backendgulapplogin.herokuapp.com/"
    );*/

    try {
      const rutabkl = localStorage.getItem("rutaBackendLogin") + 'login';
      await fetch(rutabkl, {
        method: "POST",
        credential: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setMenuState(false);
          setModalState(false);
        });
    } catch (e) {
      setLoginError(true);
    }
  };

  const register = async (
    name,
    email,
    username,
    password,
    cellphone,
    location,
    isRestaurant
  ) => {
    const payload = {
      fullName: name,
      email: email,
      username: username,
      password: password,
      password2: password,
      cellphone: cellphone,
      isRestaurant: isRestaurant,
      address: location,
    };
    try {
      const rutaBackendLogin = localStorage.getItem("rutaBackendLogin") + 'register';
      console.log("rutaBackendLogin: " + rutaBackendLogin)
      await fetch(`http://localhost:47001/register`, {
        method: "POST",
        credential: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setMenuState(false);
          setModalState(false);
        });
    } catch (e) {
      setLoginError(true);
    }
  };

  const validateLogin = () => {
    const logged = localStorage.getItem("user");
    if (!logged) return false;
    return true;
  };

  const Home = () => (
    <div>
      <Body />
    </div>
  );

  return (
    <Router>
      <Header
        onClick={() => setMenuState(!menuState)}
        setModalState={setModalState}
        setType={setType}
        logout={setModalLogoutState}
      />

      <Menu
        open={menuState}
        onClose={() => setMenuState(!menuState)}
        setModalState={setModalState}
        setMenuState={setMenuState}
      />

      <Modal
        state={modalState}
        onClose={() => setModalState(false)}
        content={
          <Login
            login={login}
            register={register}
            loginError={loginError}
            setLoginError={setLoginError}
            type={type}
          />
        }
      />

      <Modal
        state={modalLogoutState}
        onClose={() => setModalLogoutState(false)}
        content={
          <React.Fragment>
            <DialogTitle>{"¿Está seguro que desea cerrar sesión?"}</DialogTitle>
            <DialogActions>
              <Button
                onClick={() => setModalLogoutState(false)}
                color="primary"
              >
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  localStorage.clear();
                  setModalLogoutState(false);
                }}
                color="secondary"
                autoFocus
              >
                Cerrar Sesión
              </Button>
            </DialogActions>
          </React.Fragment>
        }
      />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/dish/:id"
          render={(props) => (
            <Dishes
              {...props}
              resultado={resultado}
              validateLogin={validateLogin}
              setModalState={setModalState}
            />
          )}
        />
        <Route path="/myAccount" render={(props) => <MyAccount {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
