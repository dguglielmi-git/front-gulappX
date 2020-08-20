import React from 'react';
import Payment from './Payment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../Utils/Loader';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 42,
        marginLeft: "10px"
    },
});

export default function Delivery({ precio }) {

    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const pay = () => {
        setLoading(true);
        setTimeout(
            function () {
                setLoading(false);
                setSuccess(true);
            },
            3000
        );

    }

    return (
        <div style={{ minWidth: "500px", padding: "10px", fontFamily: "Oswald" }}>
            {loading && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}><Loader type="circular" /></div>}
            {!loading && !success &&
                <React.Fragment>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>Delivery a cargo de Pedidos Ya!</h2>
                        <img src="https://media1.giphy.com/media/28cRVBSRC7r8Xv3iM5/source.gif" width="100px" />
                    </div>
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
                        <h4>Cantidad:</h4>
                        <Input
                            className={classes.input}
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            inputProps={{
                                step: 1,
                                min: 1,
                                max: 20,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                        <h3 style={{ marginLeft: "auto", color: "green" }}>${precio * value}</h3>
                    </div>
                    <Divider style={{ marginTop: "10px" }} />
                    <Payment />
                    <Button variant="contained" color="primary" onClick={() => pay()} style={{ width: "100%", marginBottom: "10px" }}>Pagar ${precio * value}</Button>
                </React.Fragment>
            }
            {success &&
                <div>
                    <h2>¡Tu pedido ya está en camino!</h2>
                    <Divider />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        {/* <h4>Podes revisar su estado en la app de PedidosYa!</h4> */}
                        <img src="https://media1.giphy.com/media/28cRVBSRC7r8Xv3iM5/source.gif" width="100px" />
                    </div>

                </div>
            }
        </div>

    )

}