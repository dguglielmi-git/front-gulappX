import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles(theme => ({
    root: {
        overflow: "hidden"
    },
}));


export default function Modal({ state, onClose, content }) {

    const theme = useTheme();
    const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={state}
            onClose={onClose}
            classes={{ root: classes.root }}
            style={{ overflow: "hidden" }}
        >
            {content}
        </Dialog >
    );
}