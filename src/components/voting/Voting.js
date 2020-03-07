import React, { Component, Fragment } from 'react'
import axios from 'axios'
import config from '../../config'

import ControlsBar from './ControlsBar'
import Choices from '../../components/voting/Choices'


export default class Voting extends Component {

    constructor(props){
        super(props)
        this.state = {        
            datas : [],
            isLike: [],
            isNotLike: [],
            isFavorite: []
        }
    }

    componentDidMount(){
        localStorage.getItem('chatroulette-datas') ? this.setState({datas: JSON.parse(localStorage.getItem('chatroulette-datas'))}) : this.getDatas()
        localStorage.getItem('isLike') ? this.setState({isLike: JSON.parse(localStorage.getItem('isLike'))}) : this.setState({isLike:[]})
        localStorage.getItem('isNotLike') ? this.setState({isNotLike: JSON.parse(localStorage.getItem('isNotLike'))}) : this.setState({isNotLike:[]})
        localStorage.getItem('isFavorite') ? this.setState({isFavorite: JSON.parse(localStorage.getItem('isFavorite'))}) : this.setState({isFavorite:[]})
    }

    getDatas(){
        axios.defaults.headers.common['x-api-key'] = config.apiKey
        axios.get('https://api.thecatapi.com/v1/images/search?limit=15&size=med')
        .then(res => {
            const datas = res.data
            this.setState({datas: datas})    
            localStorage.setItem('chatroulette-datas', JSON.stringify(datas))
        })
    }

    favorite(){
        const updateDatas = [...this.state.datas]
        const lastItem = this.state.datas[this.state.datas.length -1 ]
        updateDatas.splice(-1,1)
        this.updateIsFavorite(lastItem)
        this.setState({datas: updateDatas})      
    }

    like(){
        const updateDatas = [...this.state.datas]
        const lastItem = this.state.datas[this.state.datas.length -1 ]
        updateDatas.splice(-1,1)
        this.updateIsLike(lastItem)
        this.setState({datas: updateDatas})
    }

    notLike(){
        const updateDatas = [...this.state.datas]
        const lastItem = this.state.datas[this.state.datas.length -1 ]
        updateDatas.splice(-1,1)
        this.updateIsNotLike(lastItem)
        this.setState({datas: updateDatas})
    }

    updateIsNotLike(elt) {
        const updateNotLike = [...this.state.isNotLike]
        updateNotLike.push(elt);
        localStorage.setItem('isNotLike', JSON.stringify(updateNotLike))
        this.setState({isNotLike: updateNotLike})
    }
    
    updateIsLike(elt) {
        const updateLike = [...this.state.isLike]
        updateLike.push(elt);
        localStorage.setItem('isLike', JSON.stringify(updateLike))
        this.setState({isLike: updateLike})
    }
    
    updateIsFavorite(elt) {
        const updateFavorite = [...this.state.isFavorite]
        updateFavorite.push(elt);
        localStorage.setItem('isFavorite', JSON.stringify(updateFavorite))
        this.setState({isFavorite: updateFavorite})
    }

    render() {
        return (
            <Fragment>
                <h2>Chat Roulette</h2>
                
                <Choices 
                    choicesData={this.state.datas}
                />

                <ControlsBar 
                    handleLike={() => this.like()}
                    handleFavorite={() => this.favorite()}
                    handleNotLike={() => this.notLike()}
                />
            </Fragment>
        )
    }
}
