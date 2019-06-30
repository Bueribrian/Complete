import React, { Component } from 'react'
import {DataContext} from '../dataManager'

export default class Posts extends Component {
  static contextType = DataContext
  render() {
    // let {posts} = this.context
    let param = this.props.match.params.params
    
    return (
      <div>
       <p>Parametro de busqueda: {param}</p> 
      </div>
    )
  }
}
