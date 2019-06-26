import React, { Component } from 'react'
import Gallery from './Gallery'
import Title from './Title'
import {DataContext} from '../dataManager'

export default class Gallerys extends Component {
 static contextType = DataContext
 render() {

   let {galleries,loading} = this.context
   let getGalleries = galleries.map((item,index)=><Gallery key={index} data={item} loading={loading}/>)

    return (
      <div>
      <Title text='Galerias'/>
      <div className='galleries-container p-2'>
        {loading?'Cargando...':getGalleries}
      </div>
      </div>
    )
  }
}
