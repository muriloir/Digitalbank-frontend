import {Route} from 'react-router-dom';
import{ Link } from 'react-router-dom';
import * as axios from 'axios';
import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default class ListagemClienteXConta extends Component{
    constructor(props){
        super(props)
        this.state = {
            clientesConta : []
        }
    }

    componentDidMount(){
        const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
        axios.get('http://localhost:1337/conta/clientes', (config)).then( response => {
        this.setState({clientesConta : response.data.cliente_x_conta})})
    }


    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <h4>Clientes x Conta</h4>
                <div>
                    {this.state.clientesConta !== null ? this.state.clientesConta.map((item) => {
                        return(
                            <React.Fragment key={item.id}>
                                <Route>
                                    <div>
                                        <Link to={`/conta/cliente/${item.id -1}`}>{item.codigo}</Link>
                                    </div>
                                </Route>
                            </React.Fragment>
                        );
                    }) : ""}
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}