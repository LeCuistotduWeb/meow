import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'

export default class ControlsBar extends Component {
    render() {
        return (
            <div className={"controls-bar"}>
                <button><FontAwesome.FaHeart /></button>
                <button><FontAwesome.FaStar /></button>
                <button><FontAwesome.FaClose /></button>
            </div>
        )
    }
}
