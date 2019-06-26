import React from 'react'

export default ({data}) => {
 let {id, heroImage, title, categories,likes,views} = data
  return (
  <div className='post-card square'>
    <a href={`post/:${id}`}>
      
    <h3 className='post-card--title'>{title}</h3>
    <img className='post-card--image' src={heroImage} alt='hero post'/>
    <ul>
      {categories.map((i,index)=><li className='categorie-post' key={index}>{i}</li>)}
    </ul>
    <span>Likes: {likes}</span>
    <span> Views: {views}</span>
  </a>
  </div>
  )
}
