import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export default ({data}) => {
  let {id, heroImage, title, categories,likes,views,avatar,creator,description} = data
  let newDescription = description.substr(0,150) + ' ... '

  const PostCard = styled.div`
  box-shadow:0 .4rem .8rem rgba(0,0,0,0.2);
  text-decoration:none;
  `
  const PostCardHeader = styled.div`
  height:40%;
  width:100%;
  `
  const PostCardBody = styled.div`
  padding:2rem;

  `
  const PostCardFooter = styled.div`
  color:rgba(0,0,0,0.2);
  text-transform:uppercase;
  font-weight:bolder;
  font-size:.6rem;
  `
  const PostCardTitle = styled.div`
  font-weight:bolder;
  `
  const PostCardDescription = styled.div`
  margin: 2rem 0;
  font-size:.9rem;
  `
  return (
    
      <PostCard>
        <Link style={{'textDecoration':"none"}} to={`/post/${id}`}>
          <PostCardHeader > 
            <img style={{'objectFit':'cover','width':'100%','height':'100%'}} src={heroImage} />
          </PostCardHeader>

          <PostCardBody>
            <PostCardTitle>
              {title}
            </PostCardTitle>
            <PostCardDescription>
              {newDescription}
              <Link className='text-info' to={`/post/${id}`}>Learn more</Link>
            </PostCardDescription>
            <PostCardFooter>
              <Link to={`user/${creator}`}>
              {creator}
              </Link>
              
            </PostCardFooter>
          </PostCardBody>
        </Link>
      </PostCard>
    
  
  )
}
