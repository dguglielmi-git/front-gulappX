import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <React.Fragment>
                <h2 style={{ marginBottom: "0px", paddingBottom: "0px" }}>Pago con tarjeta</h2>
                <div style={{ minWidth: "500px", padding: "24px", display: "flex", justifyContent: "space-between" }}>
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <form style={{ marginLeft: "20px" }}>
                        <input style={{ height: "30px", borderRadius: "5px", marginBottom: "10px", width: "200px" }} name="number" variant="outlined" placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input style={{ height: "30px", borderRadius: "5px", marginBottom: "10px", width: "200px" }} name="name" variant="outlined" placeholder="Nombre del Titular"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <InputMask style={{ height: "30px", borderRadius: "5px", marginBottom: "10px", width: "200px" }} name="expiry" mask="99/9999" maskChar=" " placeholder="Fecha de Vencimiento"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus} />
                        <InputMask style={{ height: "30px", borderRadius: "5px", marginBottom: "10px", width: "200px" }} name="cvc" mask="999" maskChar=" " placeholder="CVC"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus} />
                    </form>
                </div>
            </React.Fragment >
        );
    }
}