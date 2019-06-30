import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default (props)=>{
  let {title, categorie_image,id} = props.data.item

  
  let GalleryCard = styled.div`
    border-radius:8px;
    box-shadow:0 .4rem .8rem rgba(0,0,0,0.3);
    background-image:linear-gradient(to right bottom,rgba(0,0,0,0.9), rgba(0,0,0,0.6)) ,url(${props=>props.backgroundImg||'https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}) ;
    text-align:center;
    justify-content:center;
    display:flex;
    align-items:center;
    background-color:rgba(0,0,0,0.6);
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    color:white;
    font-weigth:800;
    font-size:1.4rem;
    height:15rem;
  `

  return(
    <Link to={`/galleries/${id}`}>
      <GalleryCard backgroundImg={categorie_image}>
        <h3>{title}</h3>
      </GalleryCard>
    </Link>
  )
}
