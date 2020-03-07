import React, { Component, Fragment } from 'react'

export default class Choices extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {choicesData} = this.props

        return (
            <div className={"choices-card"}>
                <div className={"cards"}>
                    { choicesData.map(choice => 
                        <div className={`card`} key={choice.id}>
                            <img src={choice.url} alt={choice.id}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
