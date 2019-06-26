
import React, { Component } from 'react'
import BoxForm from '../components/BoxForm'
import InputForm from '../components/InputForm'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleSubmit = (e)=>{
    console.log(this.state)
    e.preventDefault()
   }
    handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)
    this.setState({
      [name]:value,
    })
   }
  render() {
     return (
       <BoxForm title='Login'>
         <form action='/login' method='POST' onSubmit={this.handleSubmit}>
           <InputForm type='text' name='username' placeholder='username' handleChange={this.handleInput}/>
           <InputForm type='password' name='password' placeholder='password' handleChange={this.handleInput}/>
           <InputForm type='submit' name='submit'/>
         </form>
       </BoxForm>
     )
  }
}
