import React, { Component } from 'react'
import tempData from './tempData'
import galleriesData from './gallerys'


const DataContext = React.createContext()

class DataProvider extends Component {
 state = {
  isLogged:true,
  loading:true,
  posts:[],
  mostLiked:[],
  recentPosts:[],
  galleries:[],
  categories:['javascript','php','react','node','css']
 }

 getMostLiked(size,data){
  //  Retorno  los post que tiene mas likes de mayor a menor
  console.log(data.length,'impreso desde la funcion getMostLiked')
  if(data.length > 0){
    let likesArray = data.sort((a,b)=> b.likes - a.likes )
    let tempoArray = []
    for(let i = 0; i < size; i++){
      tempoArray.push(likesArray[i])
    }
    return tempoArray
  }else{
    return ''
  }
 }

 getRecentPost(size, data){
  let recentPostsArray = []
  // Inserta los ultimos post del arreglo al nuevo arreglo
  for(let i = data.length -1; i >= data.length - size; i--){recentPostsArray.push(data[i])}
  // Retorna el array revertido para que tenga mejor UX
  return recentPostsArray.reverse()
 }
 

 componentDidMount(){
   console.log(this.state,'\n Antes de cargar')
   let posts = [...tempData.map(item=>item)]
   let mostLiked = this.getMostLiked(5,tempData)
   let recentPosts = this.getRecentPost(8,tempData)
   let galleries = this.getMostLiked(3,galleriesData)
    this.setState({
      loading:false,
      posts,
      mostLiked,
      recentPosts,
      galleries
    })
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


