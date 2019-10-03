import {Route} from 'react-router-dom';
import{ Link } from 'react-router-dom';
import * as axios from 'axios';
import React, {Component} from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

export default class ListagemClientes extends Component{
    constructor(props){
        super(props)
        this.state = {
            clientes : []
        }
    }

    componentDidMount(){
        const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
        axios.get('http://localhost:1337/clientes', (config)).then( response => {
        this.setState({clientes : response.data.clientes, todas : response.data.clientes})})
    }


    filtrarValor(evt){
        const lista = this.state.todas;
        if(lista !== null || lista !== undefined){
            let arrayInfos=[];
            lista.forEach( ( item ) => {
                let achou = item.nome.match(evt.target.value)
                if ( achou ) {
                    arrayInfos.push(item);
                }
            } )
            this.setState({clientes : arrayInfos})
        }
    }

    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <div>
                    <h4>Clientes</h4>
                    <div>
                        <input type="text" name="valor" placeholder="Filtrar" onBlur={this.filtrarValor.bind(this)}/>
                    </div>
                    {this.state.clientes !== null ? this.state.clientes.map((item) => {
                        return(
                            <React.Fragment key={item.id}>
                                <Route>
                                    <div>
                                        <Link to={`/Cliente/${item.id -1}`}>{item.nome}</Link>
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