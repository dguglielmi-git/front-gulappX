import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import Menu from './components/Menu'
import Modal from './components/Modal';
import MyAccount from './components/MyAccount';
import ProdResult from './prodResult.js';
import Resultado from './resultado.json';
import Dishes from './components/Dishes/Dishes.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


function App() {

  const [menuState, setMenuState] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [modalLogoutState, setModalLogoutState] = React.useState(false);
  const [resultado, setResultado] = React.useState({});

  const login = async (user, pw) => {
    const payload = {
      "username": user,
      "password": pw
    }
    console.log("Usuario: " + user + " - password: " + pw)
    try {
      await fetch(`http://localhost:47001/login`, {
        method: 'POST',
        credential: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setMenuState(false);
          setModalState(false);
        })
    }
    catch (e) {
      setLoginError(true);
    }

  }

  const register = async (name, email, username, password, cellphone, location, isRestaurant) => {
    const payload = {
      "fullName": name,
      "email": email,
      "username": username,
      "password": password,
      "password2": password,
      "cellphone": cellphone,
      "isRestaurant": isRestaurant,
      "address": location
    }
    try {
      await fetch(`http://localhost:47001/register`, {
        method: 'POST',
        credential: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setMenuState(false);
          setModalState(false);
        })
    }
    catch (e) {
      setLoginError(true);
    }

  }

  const validateLogin = () => {
    const logged = localStorage.getItem("user")
    if (!logged) return false
    return true;

    // setModalState(true)
  }




  const Home = () => (
    <div>

      <Body />

    </div>
  )

  return (
    <Router >

      <Header onClick={() => setMenuState(!menuState)} setModalState={setModalState} setType={setType} logout={setModalLogoutState} />

      <Menu open={menuState} onClose={() => setMenuState(!menuState)} setModalState={setModalState} setMenuState={setMenuState} />



      <Modal
        state={modalState}
        onClose={() => setModalState(false)}
        content={<Login login={login} register={register} loginError={loginError} setLoginError={setLoginError} type={type} />} />

      <Modal
        state={modalLogoutState}
        onClose={() => setModalLogoutState(false)}
        content={<React.Fragment><DialogTitle >{"¿Está seguro que desea cerrar sesión?"}</DialogTitle>
          <DialogActions>
            <Button onClick={() => setModalLogoutState(false)} color="primary">
              Cancelar
          </Button>
            <Button onClick={() => { localStorage.clear(); setModalLogoutState(false); }} color="secondary" autoFocus>
              Cerrar Sesión
          </Button>
          </DialogActions>
        </React.Fragment>
        } />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dish/:id" render={(props) => <Dishes {...props} resultado={resultado} validateLogin={validateLogin} setModalState={setModalState} />} />
        <Route path="/myAccount" render={(props) => <MyAccount {...props} />} />
      </Switch>

    </Router >
  );

}


export default App;