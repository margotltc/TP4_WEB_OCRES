import React from 'react';
import './Header.css';

class Descriptions extends React.Component {
    render() {
        return (
<div>
    <p>{this.props.dernierPost}</p>
</div>
        )
    }
}

export default Descriptions;