import React, { Component } from 'react'
import Cards, { Card } from './react-swipe-card'
import axios from 'axios'

export default class Swippable extends Component {

    constructor(props){
        super(props)
        this.state = {
            image : "",
            data : ['Alexandre', 'Thomas', 'Lucien']
        }
    }



    componentDidMount(){
        this.getImage()
    }


    async getImage(){
        const randomImg = await axios.get('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            return response.data[0].url
        })
        
        this.setState({image: randomImg})
    }

    action(action){
        console.log(action)
    }


    render() {
        return (
            <Cards onEnd={e => this.action('end')} className='react-swipe-card'>
                {this.state.data.map(item => 
                <Card 
                    onSwipeLeft={e => this.action('swipe left')} 
                    onSwipeRight={e => this.action('swipe right')}>
                    <h2>{item}</h2>
                </Card>
                )}
            </Cards>
        )
    }
}
