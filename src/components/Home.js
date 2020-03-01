import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            <ul className="home-lists">
                <li>
                    <Link to="/breeds">Races</Link>
                </li>
                <li>
                    <Link to="/favorites">Favoris</Link>
                </li>
            </ul>
        )
    }
}
