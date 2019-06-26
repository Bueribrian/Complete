
import React, { Component } from 'react'
import Posts from '../components/Posts'
import RecentPosts from '../components/RecentPosts'
import Galleries from '../components/Galleries'


class Home extends Component {
  render() {
    return (
      <main className='main'>
        <Galleries />
        <RecentPosts />
        <Posts />
      </main>
    )
  }
}


export default Home