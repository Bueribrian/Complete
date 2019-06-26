import React from 'react'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Post from './routes/Post'
import Profile from './routes/Profile'
import NotFound from './routes/NotFound'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default () => {
  return (
    <>
      <Router>
      <Navbar />
      <Categories />
       <Switch >
         <Route path='/' exact component={Home} />
         <Route path='/login' exact component={Login} />
         <Route path='/register' exact component={Register} />
         <Route path='/post/:id' component={Post} />
         <Route path='/profile' exact component={Profile} />
         <Route component={NotFound} />
       </Switch>
      <footer className='footer'>
        Este es un footer
      </footer>
      </Router>
    </>
  )
}
