import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import { Favorit } from './components/Favorit/Favorit';
import { AddTovar } from './components/AddTovar/AddTovar';
import { Login } from './components/Login/Login';
import { TovarsList } from './components/tovarsList/tovars';
import { TovarsListCat } from './components/tovarsListCat/tovarsCat';
import { Details } from './components/DetailTovar/details';
import { TovarsUser } from './components/tovarsUser/tovUser';

import './custom.css'

export default class App extends Component {

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home}/>
        <Route path='/favorit' component={Favorit} />
        <Route path='/addTovar' component={AddTovar} />
        <Route path='/login' component={Login} />
        <Route path='/tovarsList/:find' component={TovarsList} />
        <Route path='/tovarsListCat/:cat' component={TovarsListCat} />
        <Route path='/details/:ID' component={Details} />
        <Route path='/tovUser/:user' component={TovarsUser} />
      </Layout>
    );
  }
}
