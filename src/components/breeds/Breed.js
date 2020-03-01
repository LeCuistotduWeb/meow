import React, { Component } from 'react'
import config from '../../config'
import axios from 'axios'
import {useParams} from 'react-router-dom'


export default class Breed extends Component {

    constructor(props){
        super(props)
        this.state = {
            breed: "",
            breedImage: ""
        }
    }


    componentDidMount(){
        this.getBreed()
    }

    async getBreed(){
        const breedName = window.location.pathname.replace('/breeds/', '')
        axios.defaults.headers.common['x-api-key'] = config.apiKey
        const breedData = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
        .then(function (res) {
            return res.data[0]
        })
        this.getBreedImage(breedData.id)
        this.setState({breed: breedData})
    }

    getBreedImage = (breedId) => {
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`)
        .then(res => {
            const breedImage = res.data[0];
            console.log(res.data)
            this.setState({breedImage})
        })
        // const imageSrc = response.data[0].url    
        // const imageAlt = response.data[0].breeds[0].name
        
        // return <img src={imageSrc} alt={imageAlt} />
    }

    render() {
        const {breed, breedImage} = this.state

        return (
            <div>
                <h2>{breed.name}</h2>
                <img src={breedImage.url} alt={breed.name} className="breed-image"/>
                <p><strong>Origine :</strong> {breed.origin}</p>
                <p><strong>Espérence de vie :</strong> {breed.life_span}</p>
                <p><strong>Tempérament :</strong> {breed.temperament}</p>
            </div>
        )
    }
}
