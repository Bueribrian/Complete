import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { DataContext } from '../dataManager'
import Categories from './Categories'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      params:''
    }
  }
  static contextType = DataContext
  render() {
    let { isLogged } = this.context

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light " >
          <Link className="navbar-brand h-25" to="/">Complete</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <li className='nav-item'>
            <ul className='d-flex'>
              <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                </a>
                <Categories />
              </li>
            </ul>
            </li>
            <li className='nav-item'>
              <form className="form-inline my-2 my-lg-0" action={`/posts/${this.state.params}`}>
                <input className="form-control mr-sm-2" onChange={(e)=>{this.setState({params:e.target.value})}}  type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
            <li className='nav-item'>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link btn btn-success text-white" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-3" to="/login">Login</Link>
              </li>
            </ul>
            </li>
        </div>
      </nav>
    </>
    )
  }
}
