import React, { Component } from 'react'
import Loading from './Loading'
import Title from './Title'
import Post from './Post'
import styled from 'styled-components'

import { DataContext } from '../dataManager'

export default class Posts extends Component {
 static contextType = DataContext
 render() {
  let { loading, posts } = this.context
  let getPosts = [...posts.map(item => item)]

  const PostsContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 20px;
  width:100%;
  
  `


  let postsCompents = getPosts.map(item => <Post key={item.id} data={item} />)
 

  return (
   <>
   <Title text='Post' />
   <PostsContainer>
    {console.log(this.context)}
    
    {loading ? <Loading /> : postsCompents}

   </PostsContainer>
   </>
   
  )
 }
}
