import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        const result = this.props.value;
        return <div className="Result">Result is: {result} </div>;
    }
}
