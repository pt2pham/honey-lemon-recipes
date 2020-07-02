import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* TODO: Fix the navigation for this to get to home page correctly */}
          <a class="navbar-brand" href="/">Honey Lemon Recipes</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink class="nav-link" to="/submit">Submit</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/recipes">Recipes</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about">About</NavLink>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;