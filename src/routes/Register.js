
import React, { Component } from 'react'


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
      <div className='container ' style={{'height':'90vh'}}>
        <div className='row justify-content-md-center my-5'>
          <div className='col-5 bg-light p-5 shadow' style={{'background': 'linear-gradient(to right, #ffb347, #ffcc33)'}}>
            <div className='text-center my-5'>
              <h1 className='h1'>REGISTER</h1>
            </div>
            <form action='/register' method='POST' onSubmit={this.handleSubmit}>
              <div className='form-group mt-2'>
                <label for='username' className='p-2 font-weight-bold'>Username</label>
                <input className='form-control' name='username' id='username' placeholder='type email or username'/>
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div className='form-group mt-2'>
                <label for='email' className='p-2 font-weight-bold'>Email</label>
                <input type='email' className='form-control' name='email' id='email' placeholder='enter a valid email'/>
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div className='form-group mt-2'>
                <label for='password' className='p-2 font-weight-bold'>Password</label>
                <input type='password' className='form-control' name='password' id='password' placeholder='enter a valid password'/>
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div className='form-group mt-2'>
                <label for='repassword' className='p-2 font-weight-bold'>Re-Password</label>
                <input type='repassword' className='form-control' name='repassword' id='repassword' placeholder=''/>
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <button type='submit' className='mt-3 btn btn-success'>Register</button>
            </form>
          </div>
        </div>
      </div>

     )
  }
}
