import React, { Component, Fragment } from 'react'
import Swippable from '../../components/Swippable'
import ControlsBar from '../../components/ControlsBar'

export default class Voting extends Component {
    render() {
        return (
            <Fragment>
                 <h2>Chat Roulette</h2>
                <Swippable/>
                <ControlsBar/>
            </Fragment>
        )
    }
}
