import React, { Component } from 'react'
import Title from './Title'
import {Link} from 'react-router-dom'
import { DataContext } from '../dataManager'

export default class RecentPosts extends Component {
static contextType = DataContext
  render() {
   let {recentPosts, loading} = this.context
   

    return (
      <div id='recentPosts' className='recentPosts'>
        <Title text='Recientes'/>
        {loading?'Cargando...':
          <ul className='bg-light p-3 shadow-sm'>
            {recentPosts.map(li=><li className='my-2 ' key={li.id}><Link to={`post/:${li.id}`}>{li.title}</Link></li>)}
          </ul>
        }
      </div>
    )
  }
}
