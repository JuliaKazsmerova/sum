import React, { Component } from 'react';
import NumberInput from './NumberInput'

export default class CalculatorForm extends Component{

    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0, result: null };

        const handleChange = (name, value) => this.setState({ [name]: value });
        this.handleChangeX = handleChange.bind(this, 'x');
        this.handleChangeY = handleChange.bind(this, 'y');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { x, y } = this.state;
        const result = x + y;
        this.setState({ result });
        this.props.onResultChange(result);
    }

    render() {
        return (
            <form className="CalcForm" onSubmit={this.handleSubmit}>
                <NumberInput name="x" label="First Number: "
                             value={this.state.x}
                             onChange={this.handleChangeX}/>
                <NumberInput name="y" label="Second Number: "
                             value={this.state.y}
                             onChange={this.handleChangeY}/><br/>
                <input type="submit" value="Calculate the sum of numbers" />
            </form>
        )
    }
}
