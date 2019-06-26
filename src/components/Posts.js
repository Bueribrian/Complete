import React, { Component } from 'react'
import Loading from './Loading'
import Title from './Title'
import Post from './Post'
import { DataContext } from '../dataManager'

export default class Posts extends Component {
 static contextType = DataContext
 render() {
  let { isLoaded, posts } = this.context
  let getPosts = [...posts.map(item => item)]

  let postsCompents = <div className='posts-container'>
   {getPosts.map(item => <Post key={item.id} data={item} />)}
  </div>

  return (
   <div className='posts-container'>
    {console.log(this.context)}
    <Title text='Post' />
    {isLoaded ? <Loading /> : postsCompents}
   </div>
  )
 }
}
