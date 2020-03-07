import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class Favorites extends Component {

    constructor(props){
        super(props)
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        localStorage.getItem('isFavorite') ? this.setState({favorites: JSON.parse(localStorage.getItem('isFavorite'))}) : this.setState({favorites:[]})
    }

    render() {
        
        const {favorites} = this.state

        return (
            <div className={`favorites__container ${favorites.length > 1 ? 'grid': ''}`}>
                {favorites.length > 1 ? (
                    favorites.map(elt => 
                        <div className={"favorite-item"}>
                            <img src={elt.url} alt={elt.id}/>
                        </div>
                    )
                ) : 
                (
                    <div className="favorites__content-null">
                        <p>Vous avez aucun favoris pour le momment</p>
                        <Link to="/chatroulette">Jouer à Chatroulette</Link>
                    </div>
                )}
            </div>
        )
    }
}
