import React, { Component } from 'react'
import { DataContext } from '../dataManager'
import {Link} from 'react-router-dom'

export default class Categories extends Component {
  static contextType = DataContext
  render() {
    let { categories } = this.context
    let getCategories = categories.map((item, index) => <Link key={index} className="dropdown-item" to={'/posts/'+item.toLowerCase()}>{item}</Link>)
    return (
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {getCategories}
      </div>
    )
  }
}
