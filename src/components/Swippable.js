import React, { Component } from 'react'
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list'
import '@sandstreamdev/react-swipeable-list/dist/styles.css'
import axios from 'axios'

export default class Swippable extends Component {

    constructor(props){
        super(props)
        this.state = {
            image : "",
        }
    }



    componentDidMount(){
        this.getImage()
    }


    async getImage(){
        const randomImg = await axios.get('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            console.log(response);
            return response.data[0].url
        })
        
        this.setState({image: randomImg})
    }


    render() {
        return (
            <SwipeableList>
                <SwipeableListItem
                    swipeLeft={{
                    content: <div>is Cute</div>,
                    action: () => console.info('swipe action triggered')
                    }}
                    swipeRight={{
                    content: <div>is Creepy</div>,
                    action: () => console.info('swipe action triggered')
                    }}
                    onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
                >
                    <div className={"swipe-card"}>
                        <img src={this.state.image} alt="ddd"/>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        )
    }
}
