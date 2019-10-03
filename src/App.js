import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import ListagemAgencias from './pages/ListagemAgencias';
import ListagemClientes from './pages/ListagemClientes';
import ListagemTipoContas from './pages/ListagemTipoContas';
import ListagemClienteXConta from './pages/ListagemClienteXConta';

import Agencia from './components/Agencia';
import Cliente from './components/Cliente';
import TipoConta from './components/TipoConta';
import ClienteXConta from './components/ClienteXConta';

export default class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/ListagemAgencias" component = {ListagemAgencias} />
              <PrivateRoute path="/ListagemClientes" component = {ListagemClientes} />
              <PrivateRoute path="/ListagemTipoContas" component = {ListagemTipoContas} />
              <PrivateRoute path="/ListagemClienteXConta" component = {ListagemClienteXConta} />
              <PrivateRoute path="/Agencia/:id" component={ Agencia } />
              <PrivateRoute path="/Cliente/:id"  component={ Cliente } />
              <PrivateRoute path="/TipoConta/:id"  component={ TipoConta } />
              <PrivateRoute path="/conta/cliente/:id" component={ ClienteXConta } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}