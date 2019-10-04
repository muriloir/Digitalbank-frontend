import React, { Component } from 'react';
import { MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import './Navbar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        localStorage.removeItem("Authorization");
    }
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
                        {/* <li className="nav-item active">
                            <a id="nav-links" className="nav-link" href="/"> Início
                                <span className="sr-only">(current)</span>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a id="nav-links" className="nav-link" href="/"> Início</a>
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
                        <MDBNavItem className="pr-2">
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu right className="dropdown-default">
                                    <MDBDropdownItem onClick={this.logout}>
                                        <a href="/"> Sair </a>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </ul>
                </div>
            </nav>
        );
    }
}