import React, { Component } from 'react'
import {Link} from "react-router-dom";
import config from '../../config'
import axios from 'axios'

export default class breedsList extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            breeds: []
        }
    }

    componentDidMount(){
        this.getBreeds()
    }

    async getBreeds(){
        const breedsList = await axios.get('https://api.thecatapi.com/v1/breeds?api_key='+ config.apiKey)
        .then(function (response) {
            return response.data
        })
        this.setState({breeds: breedsList})
    }

    renderList(){
        
    }
    
    render() {
        return (
            <ul className={"breeds-list"}>
                    {this.state.breeds.map(breed => {
                        return ( 
                            <li className={"breeds-item"}>
                                <Link to={`/breeds/${breed.name}`}>{breed.name}</Link>
                            </li>
                        )
                    })}  
            </ul>
        )
    }
}
