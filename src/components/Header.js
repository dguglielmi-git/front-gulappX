import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from './Search';
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles(theme => ({
    header: {
        padding: '2px 2px',
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'no-wrap',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        position: "fixed",
        top: 0,
        backgroundColor: "#fff",
        boxShadow: "none",
        fontFamily: 'Oswald',
        borderBottom: "1px solid",
    },
    title: {
        color: "#000",
    },
    menu: {
        color: "#000",
        marginLeft: "12px"
    },
    search: {
        marginLeft: "auto"
    },
    link: {
        color: "black",
        textDecoration: "none",
        fontFamily: 'Oswald',
    }
}));

const Header = ({ onClick, setModalState, logout, setType }) => {

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.header}>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menu} onClick={onClick}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="primary" className={classes.title}>
                <Link to="/" className={classes.link}><strong>GulappX</strong></Link>
            </Typography>
            <Typography variant="h6" color="primary" style={{ marginLeft: "auto" }}>
                {loggedUser && <span style={{ fontSize: "14px", marginRight: "24px", cursor: "pointer" }} onClick={() => logout(true)}>Bienvenido {loggedUser.username}</span>}
                {!loggedUser && (<React.Fragment><span onClick={() => { setModalState(true); setType(false) }} style={{ fontSize: "14px", cursor: "pointer" }}>Iniciar Sesión</span> | <span onClick={() => { setModalState(true); setType(true) }} style={{ color: "#333", fontSize: "14px", marginRight: "24px", cursor: "pointer" }}>Registrarse</span></React.Fragment>)}
            </Typography>

        </AppBar>
    )
}

export default Header;