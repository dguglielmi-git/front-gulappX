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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Loader from './Utils/Loader';
import LoginForm from '../components/Login/LoginForm'
import RegisterForm from '../components/Login/RegisterForm'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login({ login, register, loginError, setLoginError, type }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        name: "",
        email: "",
        username: "",
        password: "",
        cellphone: "",
        location: ""
    });
    const [loading, setLoading] = React.useState(false);
    const [newUser, setNewUser] = React.useState(type);

    const handleChange = input => e => {
        setState({
            ...state,
            [input]: e.target.value
        });
    }

    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            startLogin();
        }
    }

    const startLogin = () => {
        setLoginError(false)
        setLoading(true)
        const { username, password } = state;
        login(username, password)
       // setLoading(false)
    }

    const startRegister = (isRestaurant) => {
        // setLoginError(false)
        setLoading(true)
        const { name, email, username, password, cellphone, location } = state;
        register(name, email, username, password, cellphone, location, isRestaurant);
        // setLoading(false)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {
                    !newUser ?
                        <LoginForm handleChange={handleChange} enterPressed={enterPressed} loginError={loginError} startLogin={startLogin} loading={loading} setNewUser={() => setNewUser(true)} />
                        :
                        <RegisterForm handleChange={handleChange} enterPressed={enterPressed} loginError={loginError} startLogin={startLogin} loading={loading} setNewUser={() => setNewUser(false)} startRegister={startRegister} />
                }
            </div>
            <Box mt={8}>

            </Box>
        </Container>
    );
}