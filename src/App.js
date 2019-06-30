import React from 'react'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Post from './routes/Post'
import Posts from './routes/Posts'
import Profile from './routes/Profile'
import NotFound from './routes/NotFound'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Categorie from './routes/Categorie'
import Upload from './routes/Upload'
import Galleries from './routes/Galleries'
import User from './routes/User'

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
         <Route path='/posts/:params' component={Posts} />
         <Route path='/post/:id' component={Post} />
         <Route path='/upload' component={Upload} />
         <Route path='/user/:id' component={User} />
         <Route path='/galleries/:id' component={Galleries} />
         <Route path='/categorie/:categorie' exact component={Categorie} />
         <Route path='/profile' exact component={Profile} />
         <Route component={NotFound} />
       </Switch>

      </Router>
    </>
  )
}
