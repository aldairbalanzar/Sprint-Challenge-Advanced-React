import React, { Component } from 'react';

class Card extends Component {
    render() {
        const mystyle = {
            textAlign: "left",
            backgroundColor: "salmon",
            width: '30%',
            border: '4px solid lightblue',
            padding: '1% 0 1% 6%',
            margin: "1% 28%"
          };
        return (
            <div>
                <h1 style={mystyle}>{this.props.name}</h1>
            </div>
        );
    }
}

export default Card;