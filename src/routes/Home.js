
import React, { Component } from 'react'
import Posts from '../components/Posts'
import RecentPosts from '../components/RecentPosts'
import Galleries from '../components/Galleries'


class Home extends Component {
  constructor(props) {
    super();
        this.handleScroll = this.handleScroll.bind(this);

}
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    // let recentPosts = document.querySelector('#recentPosts')
    // let windowCords = window.pageYOffset
    // let recentPostsCords = recentPosts.getBoundingClientRect();
    // console.log(recentPostsCords.top, windowCords)
    // if(windowCords >= recentPostsCords.top){
    //   recentPosts.style.position = 'fixed'
    //   recentPosts.style.top = (recentPostsCords.top ) + 'px'
    //   recentPosts.style.width = '22rem'
    // }else{
    //   recentPosts.style.position = 'relative'
    //   recentPosts.style.top = '0'
    //   recentPosts.style.width = 'auto'
    // }
  }

  render() {
    return (
      <main onScrollCapture={this.handleScroll} className='main'>
        <div className='container'>
          <div className='row mb-3'>
            <div className='col-md-12 col-sm-12'>
              <Galleries />
            </div>
          </div>
          <div className='row row-reverse'>
            <div className='col-md-9 '>
              <Posts />
            </div>
            
            <div className='col-md-3 '>
              <RecentPosts />
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Home