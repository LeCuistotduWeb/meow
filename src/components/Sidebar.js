import React, {Component, Fragment} from 'react'
import {Link} from "react-router-dom";

export default class Sidebar extends Component {
    
    render(){

        const {toggleSidebar, handleClickOverlay} = this.props

        return (
            <Fragment>
            <div className={`sidebar-overlay ${toggleSidebar ? 'show' : ''}`} onClick={handleClickOverlay}/>
            <nav className={`sidebar-menu " ${toggleSidebar === true ? 'open': ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={handleClickOverlay}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/breeds" onClick={handleClickOverlay}>Races</Link>
                    </li>
                    <li>
                        <Link to="/chatroulette" onClick={handleClickOverlay}>Chat Roulette</Link>
                    </li>
                    <li>
                        <Link to="/favorites" onClick={handleClickOverlay}>Favoris</Link>
                    </li>
                </ul>
            </nav>
            </Fragment>
        )
    }
}