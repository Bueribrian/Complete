import React from 'react'
import {Link} from 'react-router-dom'


export default () => {
  return (
    <nav className='navbar'>
     <div className='logo'>
     <Link to='/'><h1>COMPLETE</h1></Link>
     </div>
     <div className='search-input'>
      <input type='text' placeholder='Search'/>
      <i className="fas fa-search"></i>
     </div>
     <div className='user-panel'>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
     </div>
    </nav>
  )
}
