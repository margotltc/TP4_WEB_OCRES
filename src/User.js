import React from 'react';
import './Header.css';
import Informations from './Informations.js';
import Descriptions from './Descriptions.js';


class User extends React.Component {
    

    render() {
        console.log(this.props.prenom);
        return (
        <>
            <Informations 
                prenom={this.props.prenom}
                nom={this.props.nom}
                dateNaissance={this.props.dateNaissance}
                image={this.props.image}
            />
            <Descriptions dernierPost={this.props.dernierPost}/>
        </>
        )
    }
}

export default User;