import React, { Component } from 'react'
import styled from 'styled-components'
import {DataContext} from '../dataManager'
import Gallery from './Gallery'
import Title from './Title'

export default class Gallerys extends Component {
 static contextType = DataContext
 render() {

   
   let {galleries, loading} =this.context
  //  galleries=galleries.length > 0? galleries: 'No hay galerias'
   console.log(galleries, 'impreso desde galleries.json')
   let getGalleries =galleries==''?'No hay gallerias':galleries.map((item,index)=><Gallery key={index} data={{item,loading}}/>)
   let GalleryCardContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr) ) ;
    grid-gap:2rem;
  `
    return (
      <div>
      <Title text='Galerias'/> 
      <GalleryCardContainer>
       {console.log(getGalleries)}
        {!loading?getGalleries:"CARGANDO..."}
      </GalleryCardContainer>
      </div>
    )
  }
}
