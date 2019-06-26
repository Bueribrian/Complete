import React, { Component } from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import { DataContext } from '../dataManager'

export default class RecentPosts extends Component {
static contextType = DataContext
  render() {
   let {recentPosts} = this.context
   
    return (
      <div className='recentPosts'>
        <Title text='Recientes'/>
          <ul className='list-recents square'>
            {recentPosts.map(li=><li key={li.id}><Link to={`post/:${li.id}`}>{li.title}</Link></li>)}
          </ul>
      </div>
    )
  }
}
