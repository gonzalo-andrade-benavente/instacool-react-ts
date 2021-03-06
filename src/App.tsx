import React from 'react';

import './App.css';

import { Route } from 'react-router';

import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';

import Navbar from './components/Navbar';
import Profile from './containers/Profile';
import NewsFeed from './containers/NewsFeed';



function App() {
  return (

    <div>

      <Route exact={true} path='/' component={Login} />

      <Route exact={true} path='/register' component={Register} />

      <Route path='/app' component={Navbar} />

      <Route exact={true} path='/app/newsfeed' component={NewsFeed} />

      <Route exact={true} path='/app/profile' component={Profile} />

    </div>

  );
}

export default App;
