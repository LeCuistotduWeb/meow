import React, { Component } from 'react'
import config from '../../config'
import axios from 'axios'
import {useParams} from 'react-router-dom'


export default class Breed extends Component {

    constructor(props){
        super(props)
        this.state = {
            breed: ''
        }
    }


    componentDidMount(){
        this.getBreed()
    }

    async getBreed(){
        const breedName = window.location.pathname.replace('/breeds/', '')
        console.log(breedName)
        const breedData = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}&api_key=`+ config.apiKey)
        .then(function (response) {
            return response.data
        })
        this.setState({breed: breedData[0]})
    }

    render() {
        const {breed} = this.state

        return (
            <div>
                <h2>{breed.name}</h2>
                <p>Origine : {breed.origin}</p>
                <p>Espérence de vie : {breed.life_span}</p>
                <p>Tempérament : {breed.temperament}</p>
            </div>
        )
    }
}
