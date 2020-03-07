import React, { Component } from 'react'
import * as FontAwesome from 'react-icons/lib/fa'

export default class ControlsBar extends Component {
    render() {
        return (
            <div className={"controls-bar"}>
                <button className="like" onClick={this.props.handleLike}><FontAwesome.FaHeart /></button>
                <button className="favorites" onClick={this.props.handleFavorite}><FontAwesome.FaStar /></button>
                <button className="dislike" onClick={this.props.handleNotLike}><FontAwesome.FaClose /></button>
            </div>
        )
    }
}
