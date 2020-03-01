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
        axios.defaults.headers.common['x-api-key'] = config.apiKey
        const breedsList = await axios.get('https://api.thecatapi.com/v1/breeds')
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
