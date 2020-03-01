import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'

export default class ControlsBar extends Component {
    render() {
        return (
            <div className={"controls-bar"}>
                <button className="like"><FontAwesome.FaHeart /></button>
                <button className="favorites"><FontAwesome.FaStar /></button>
                <button className="dislike"><FontAwesome.FaClose /></button>
            </div>
        )
    }
}
