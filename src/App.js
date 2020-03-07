import React, {Component} from 'react'
import './App.css'
import * as FontAwesome from 'react-icons/lib/fa'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import config from './config'
import axios from 'axios'

// Component
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Voting from './components/voting/Voting'
import BreedsList from './components/breeds/BreedsList'
import Favorites from './components/favorites/Favorites'
import Breed from './components/breeds/Breed'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      showSidebar: false,
      breeds : [],
    }
  }

  componentDidMount(){
        if(localStorage.getItem('breeds')){
            this.setState({breeds: JSON.parse(localStorage.getItem('breeds'))})
        }
        else {
            this.getBreeds()
        }
    }

  toggleSidebar(){
    return this.setState({showSidebar: !this.state.showSidebar})
  }

  getBreeds() {
    let breeds = []
    axios.defaults.headers.common['x-api-key'] = config.apiKey
    axios.get('https://api.thecatapi.com/v1/breeds')
      .then(res => {
        breeds = res.data;
      }).then(() => {
        this.getBreedsImage(breeds)
      })
  }

  getBreedsImage(breeds) {
    const updateBreeds = [...breeds]
    updateBreeds.map(breed => {
      axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${breed.id}`)
        .then(function (res) {
          breed.picture = res.data[0].url
        }).then(() => {
          this.setState({
            breeds: updateBreeds
          });
          localStorage.setItem('breeds', JSON.stringify(updateBreeds))
        })
    })
  }

  render() {

    const {showSidebar, breeds} = this.state

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
                <Home />
              </Route>

              <Route path="/chatroulette">
                <Voting breeds={breeds}/>
              </Route>

              <Route path="/breeds/:breedName" children={<Breed/>} />
              
              <Route path="/breeds">
                <BreedsList breeds={breeds}/>
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