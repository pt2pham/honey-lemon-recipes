import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Recipes from './Recipes'
import Submit from './Submit'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App
