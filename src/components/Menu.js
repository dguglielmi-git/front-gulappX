import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import ExitToApp from '@material-ui/icons/ExitToApp';
import FastFood from '@material-ui/icons/Fastfood';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: 250,
        fontFamily: 'Oswald',
    },
    paper: {
        backgroundColor: "lightgrey",
        fontFamily: 'Oswald',
    },
    divider: {
        backgroundColor: "#000"
    },
    link: {
        color: "#000",
        textDecoration: "none",
        fontFamily: 'Oswald',
    }
});

export default function Menu({ open, onClose, setModalState }) {
    const classes = useStyles();

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.clear()
    }

    // const userType = loggedUser.isRestaurant === 1 ? "";


    return (
        <Drawer
            open={open}
            onClose={onClose}
            classes={{ paper: classes.paper }}
        >
            <div
                className={classes.list}
                role="presentation"
            >
                <List style={{ color: "#000" }}>
                    {loggedUser && (
                        <React.Fragment>
                            <Link to="/myAccount" onClick={onClose} className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon><Person color="primary" /></ListItemIcon>
                                    <ListItemText primary="Mi cuenta" />
                                </ListItem>
                            </Link>
                            <Divider className={classes.divider} />
                            <Link to="/" onClick={onClose} className={classes.link}>
                                <ListItem button key="" onClick={logout}>
                                    <ListItemIcon><ExitToApp color="error" /></ListItemIcon>
                                    <ListItemText primary="Cerrar Sesion" />
                                </ListItem>
                            </Link>
                        </React.Fragment>
                    )}
                    {!loggedUser &&
                        <ListItem button key="" onClick={() => setModalState(true)}>
                            <ListItemIcon><ExitToApp color="primary" /></ListItemIcon>
                            <ListItemText primary="Iniciar Sesion" />
                        </ListItem>
                    }
                </List>
            </div>
        </Drawer>

    );
}