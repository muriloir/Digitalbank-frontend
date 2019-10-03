import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';    
import * as axios from 'axios'; 

export default class ListagemAgencias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agencias: []
        }
        this.filtrarValor = this.filtrarValor.bind(this);
    }

    componentDidMount(){
        const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
        axios.get('http://localhost:1337/agencias', (config)).then( response => {
        this.setState({agencias : response.data.agencias})})
    }

    filtrarValor(evt) {
        const lista = this.state.agencias;
        if (lista) {
            let filtrarAgencias = [];
            lista.forEach((item) => {
                let achou = item.nome.match(evt.target.value)
                if (achou) {
                    filtrarAgencias.push(item);
                }
            })
            this.setState({ agencias: filtrarAgencias })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div>
                    <h4>Agências</h4>
                    <div>
                        <input type="text" name="valor" placeholder="Filtrar" onBlur={this.filtrarValor} />
                    </div>
                    {this.state.agencias ? this.state.agencias.map((item) => {
                        return (
                            <div key={item.id}>
                                <Route>
                                    <div>
                                        <Link to={`/Agencia/${item.id - 1}`}>{item.nome}</Link>
                                    </div>
                                </Route>
                            </div>
                        );
                    }) : ""}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}