import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Recipes from '../components/Recipes'
import Submit from '../components/Submit'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/about" component={About} />
      </Switch>
    )
  }
}

export default App
