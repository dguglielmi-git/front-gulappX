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
import Container from '@material-ui/core/Container';
import Loader from '../Utils/Loader';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
}));



// export default function RegisterForm({ enterPressed, handleChange, startLogin, loginError, loading, setNewUser }) {

//     const classes = useStyles();

//     return (
//         <React.Fragment>
//             <Avatar className={classes.avatar}>
//                 <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//                 Registrarse
//             </Typography>

//             <form className={classes.form} noValidate>
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email"
//                     name="email"
//                     autoFocus
//                     onChange={handleChange("username")}
//                     onKeyUp={enterPressed}
//                 />
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Contraseña"
//                     type="password"
//                     id="password"
//                     onChange={handleChange("password")}
//                     onKeyUp={enterPressed}
//                 />
//                 {/* <FormControlLabel
//                         control={<Checkbox value="remember" color="primary" />}
//                         label="Recordarme"
//                     /> */}
//                 <Button
//                     // type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     className={classes.submit}
//                     onClick={startLogin}
//                 >
//                     Entrar
//                     </Button>
//                 {!loginError && loading && <Loader type="linear" />}
//                 {loginError && <span style={{ color: "red", marginBottom: "10px" }}>Usuario y contraseña incorrectos</span>}
//                 <Grid container>
//                     <Grid item>
//                         <Link variant="body2" onClick={setNewUser}>
//                             Login
//                         </Link>
//                     </Grid>
//                 </Grid>
//             </form>

//         </React.Fragment>
//     )
// }


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function FullWidthTabs({ enterPressed, handleChange, startRegister, loginError, loading, setNewUser }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                // variant="fullWidth"
                >
                    <Tab label="Soy usuario" {...a11yProps(0)} />
                    <Tab label="Soy restaurante" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <React.Fragment>
                        {/* <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Nombre"
                                name="name"
                                autoFocus
                                onChange={handleChange("name")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="usename"
                                label="Nombre de Usuario"
                                name="usename"
                                autoFocus
                                onChange={handleChange("username")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoFocus
                                onChange={handleChange("email")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="cellphone"
                                label="Celular"
                                name="cellphone"
                                autoFocus
                                onChange={handleChange("cellphone")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="location"
                                label="Direccion"
                                name="location"
                                autoFocus
                                onChange={handleChange("location")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                onChange={handleChange("password")}
                                onKeyUp={enterPressed}
                            />
                            {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Recordarme"
                    /> */}
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => startRegister(false)}
                            >
                                Registrarse
                            </Button>
                            {!loginError && loading && <Loader type="linear" />}
                            {loginError && <span style={{ color: "red", marginBottom: "10px" }}>Alguno de los datos es incorrecto</span>}
                            <Grid container>
                                <Grid item>
                                    <Link variant="body2" onClick={setNewUser}>
                                        Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>

                    </React.Fragment>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <React.Fragment>
                        {/* <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar> */}
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Nombre del Restaurante"
                                name="name"
                                autoFocus
                                onChange={handleChange("name")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Nombre de usuario"
                                name="username"
                                autoFocus
                                onChange={handleChange("username")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoFocus
                                onChange={handleChange("email")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="cellphone"
                                label="Celular"
                                name="cellphone"
                                autoFocus
                                onChange={handleChange("cellphone")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="location"
                                label="Direccion"
                                name="location"
                                autoFocus
                                onChange={handleChange("location")}
                                onKeyUp={enterPressed}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                onChange={handleChange("password")}
                                onKeyUp={enterPressed}
                            />
                            {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Recordarme"
                    /> */}
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => startRegister(true)}
                            >
                                Registrarse
                            </Button>
                            {!loginError && loading && <Loader type="linear" />}
                            {loginError && <span style={{ color: "red", marginBottom: "10px" }}>Alguno de los datos es incorrecto</span>}
                            <Grid container>
                                <Grid item>
                                    <Link variant="body2" onClick={setNewUser}>
                                        Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>

                    </React.Fragment>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}