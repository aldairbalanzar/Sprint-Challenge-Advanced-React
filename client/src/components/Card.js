import React, { Component } from 'react';

class Card extends Component {
    render() {
        const mystyle = {
            textAlign: "left",
            backgroundColor: "salmon",
            width: '30%',
            border: '4px solid lightblue',
            padding: '1% 0 1% 6%',
            margin: "1% 34%"
          };
        return (
            <div>
                <h2 style={mystyle}>Player: {this.props.name}</h2>
            </div>
        );
    }
}

export default Card;