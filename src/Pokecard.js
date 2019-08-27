import React, {Component} from 'react';
import './Pokecard.css'
const imgLink = " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component{
    render(){
        let imgSrc = `${imgLink}${this.props.id}.png`
        return(
            
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc}></img>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Experience: {this.props.exp}</div>

            </div>
        )
    }
    
} 

export default Pokecard;

