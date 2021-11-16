import React from 'react';
import './Header.css'

class Button extends React.Component {
    render() {
        return (
            <button className="name">
                {this.props.name}
            </button>
        )
    }
}

export default Button;