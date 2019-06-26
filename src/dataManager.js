import React, { Component } from 'react'
import tempData from './tempData'
import galleries from './gallerys'

const DataContext = React.createContext()

class DataProvider extends Component {
 state = {
  loading:true,
  posts:[],
  mostLiked:[],
  recentPosts:[],
  galleries:[],
  categories:['javascript','php','react','node','css']
 }

 getMostLiked(size){
  //  Retorno  los post que tiene mas likes de mayor a menor
   let likesArray = tempData.sort((a,b)=> b.likes - a.likes )
   let tempoArray = []
   for(let i = 0; i < size; i++){
     tempoArray.push(likesArray[i])
   }
   return tempoArray
 }

 getRecentPost(size){
  let recentPostsArray = []
  // Inserta los ultimos post del arreglo al nuevo arreglo
  for(let i = tempData.length -1; i >= tempData.length - size; i--){recentPostsArray.push(tempData[i])}
  // Retorna el array revertido para que tenga mejor UX
  return recentPostsArray.reverse()
 }
 
 getGalleries(size){
   let tempoArray = []
   let count = 0
   while(count < size){
      let random = Math.floor(Math.random()*galleries.length - 1)
      tempoArray.push(galleries[random])
      count++
   }
  return tempoArray
 }
 componentDidMount(){
   console.log(this.state,'\n Antes de cargar')
   let posts = [...tempData.map(item=>item)]
   let mostLiked = this.getMostLiked(5)
   let recentPosts = this.getRecentPost(8)
   let galleries = this.getGalleries(3)
    this.setState({
      posts,
      mostLiked,
      recentPosts,
      galleries
    })
  setTimeout(()=>this.setState({
    loading:false
  }),2000)
  
  
 }
  render() {
    return (
     <DataContext.Provider value={{...this.state}}>
      {this.props.children}
     </DataContext.Provider>
     )
  }
}
export {DataProvider, DataContext}


