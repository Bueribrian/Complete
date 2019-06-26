import React, { Component } from 'react'
import {DataContext} from '../dataManager'

export default class Post extends Component {
  static contextType = DataContext
  render() {
    // let {posts} = this.context
    let id = this.props.match.params.id
    
    return (
      <div>
        {id}
      </div>
    )
  }
}

