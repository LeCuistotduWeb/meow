import React, { Component, Fragment } from 'react'
import Swippable from '../../components/Swippable'
import ControlsBar from '../../components/ControlsBar'

export default class Voting extends Component {
    render() {
        return (
            <Fragment>
                 <h2>Cute or Ugly ?</h2>
                <Swippable/>
                <ControlsBar/>
            </Fragment>
        )
    }
}
