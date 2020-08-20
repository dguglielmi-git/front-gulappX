import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        marginTop: "10",
        // margin: "0px auto",
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        // margin: '0px auto'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


const Search = ({ width, onSearch, onChange }) => {
    const classes = useStyles();

    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            onSearch();
        }
    }

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Buscar..."
                    onChange={onChange}
                    onKeyUp={enterPressed}
                />
                <IconButton className={classes.iconButton} aria-label="search" onClick={onSearch} >
                    <SearchIcon />
                </IconButton>
            </Paper >
            <Button variant="contained" onClick={onSearch} style={{ marginTop: "24px", backgroundColor: "#333", color: "#fff", fontFamily: "Oswald" }}>Buscar mi plato</Button>
        </React.Fragment>

    )

}

export default Search;
