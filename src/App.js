import React, {Component} from 'react';
import './App.css';
import * as FontAwesome from 'react-icons/lib/fa'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// Component
import Sidebar from './components/Sidebar'
import Swippable from './components/Swippable'
import ControlsBar from './components/ControlsBar'
import BreedsList from './components/breeds/BreedsList';
import Favorites from './components/favorites/Favorites';
import Breed from './components/breeds/Breed';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      showSidebar: false,
    }
  }

  toggleSidebar(){
    return this.setState({showSidebar: !this.state.showSidebar})
  }

  handleClickLike(){
    console.log("i like thie picture :)")
  }

  render() {

    const {showSidebar} = this.state

    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <Link to='/'><h1>Meow!</h1></Link>
            <div className="toggleMenu" onClick={e => this.toggleSidebar(e)}>
              {showSidebar ? <FontAwesome.FaClose /> : <FontAwesome.FaBars />}
            </div>
          </header>

          <Sidebar toggleSidebar={showSidebar} handleClickOverlay={e => this.toggleSidebar(e)}/>

          <main>
            <Switch>
              
              <Route exact path="/">
                <h2>Cute or Ugly ?</h2>
                <Swippable/>
                <ControlsBar/>
              </Route>

              <Route path="/breeds/:breedName" children={<Breed/>} />
              
              <Route path="/breeds">
                <BreedsList />
              </Route>
              
              <Route path="/favorites">
                <Favorites />
              </Route>

            </Switch>
          </main>

        </div>
       </Router>
    );
  }
}
export default App;