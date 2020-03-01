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

    getBreeds(){
        axios.defaults.headers.common['x-api-key'] = config.apiKey
        axios.get('https://api.thecatapi.com/v1/breeds')
        .then(res => {
            const breeds = res.data;
            this.setState({ breeds });
        })
    }
    
    render() {

        const {breeds} = this.state

        const getBreedImage = breedId => {
            axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`)
            .then(function(res){
                const imageSrc = res.data[0].url    
                const imageAlt = res.data[0].breeds[0].name
                console.log(imageSrc)
                return <img src={imageSrc} alt={imageAlt} />
            })
          }

        return (
            <ul className={"breeds-list"}>
                    {breeds.map(breed => {
                        return ( 
                            <li className={"breeds-item"} key={breed.id}>
                                <Link to={`/breeds/${breed.name}`}>
                                    {getBreedImage(breed.id)}
                                    {breed.name}
                                </Link>
                            </li>
                        )
                    })}  
            </ul>
        )
    }
}
