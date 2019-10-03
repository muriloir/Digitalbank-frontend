import React, { Component } from 'react';
import './Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark pink darken-1">
                <div id="logo" alt="digital">
                    <a className="navbar-brand" href="/">
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a id="nav-links" className="nav-link" href="/"> Início
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-links" className="nav-link" href="/ListagemAgencias"> Agências</a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-links" className="nav-link" href="/ListagemClientes"> Clientes </a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-links" className="nav-link" href="/ListagemTipoContas"> Tipos de Contas </a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-links" className="nav-link" href="/ListagemClienteXConta"> Clientes x Conta </a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}