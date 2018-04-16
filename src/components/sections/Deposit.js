import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Deposit.css';
import { increaseAmount, resetAmount } from './../../reducers/depositReducer';
import { increaseBalance } from './../../reducers/userReducer';
import { toggleVisibility } from './../../reducers/modalReducer';
export class Deposit extends Component {
    constructor() {
        super();
        this.handleIncrementChange = this.handleIncrementChange.bind(this);
    }

    handleIncrementChange(increment) {
        return event => {
            event.preventDefault();
            this.props.increaseAmount(increment);
        };
    }

    handleClose() {
        return event => {
            event.preventDefault();
            this.props.toggleVisibility(false);
        };
    }

    render() {
        return (
            <div className="deposit-wrapper">
                <div className="deposit">
                    <div className="btn money">
                        {parseFloat(this.props.depositAmount / 100).toFixed(2)}
                        &euro;
                    </div>
                    <button
                        className="btn erase-btn erase"
                        onClick={this.props.resetAmount}
                    >
                        &#9003;
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(5)}
                    >
                        + 0.05 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(10)}
                    >
                        + 0.10 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(20)}
                    >
                        + 0.20 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(50)}
                    >
                        + 0.50 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(100)}
                    >
                        + 1.00 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(200)}
                    >
                        + 2.00 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(500)}
                    >
                        + 5.00 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(1000)}
                    >
                        + 10.00 €
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(2000)}
                    >
                        + 20.00 €
                    </button>
                    <button
                        className="btn number cancel"
                        onClick={() => {
                            this.props.resetAmount();
                            this.handleClose();
                        }}
                    >
                        Peruuta
                    </button>
                    <button
                        className="btn number increment"
                        onClick={this.handleIncrementChange(5000)}
                    >
                        + 50.00 €
                    </button>
                    <button
                        className="btn number success"
                        onClick={() => {
                            this.props.increaseBalance(
                                this.props.token,
                                this.props.depositAmount
                            );
                            this.props.resetAmount();
                            this.handleClose();
                        }}
                    >
                        OK
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    depositAmount: state.deposit.depositAmount,
    token: state.authentication.access_token
});

const mapDispatchToProps = {
    increaseAmount,
    resetAmount,
    increaseBalance,
    toggleVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);