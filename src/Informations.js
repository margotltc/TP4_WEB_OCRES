import React from 'react';
import './Header.css';

class Informations extends React.Component {
    render() {
        console.log(this.props);
        return (
<div> 
    <img src={this.props.image}></img>
    <div>
        <p>{this.props.nom}</p>
        <p>{this.props.prenom}</p>
        <p>{this.props.dateNaissance}</p>
    </div>
</div>
        )
    }
}

export default Informations;