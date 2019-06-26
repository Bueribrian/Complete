import React, { Component } from 'react'
import {DataContext} from '../dataManager'
export default class Categories extends Component {
 static contextType = DataContext
  render() {
   let {categories,loading} = this.context
   let getCategories = categories.map((item,index)=><a key={index} href='/algo'>{item}</a>)
    return (
      <div className='categories-container'>
        {loading?"CARGANDO...":getCategories}
      </div>
    )
  }
}
