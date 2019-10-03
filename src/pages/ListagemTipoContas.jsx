import {Route} from 'react-router-dom';
import{ Link } from 'react-router-dom';
import * as axios from 'axios';
import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default class ListagemTipoContas extends Component{
    constructor(props){
        super(props)
        this.state = {
            tipoContas : []
        }
    }

    componentDidMount(){
        const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
        axios.get('http://localhost:1337/tipoContas', (config)).then( response => {
        this.setState({tipoContas : response.data.tipos, todas : response.data.tipos})})
    }

    filtrarValor(evt){
        const lista = this.state.todas;
        if(lista != null || lista !== undefined){
            let arrayInfos=[];
            lista.forEach( ( item ) => {
                let achou = item.nome.match(evt.target.value)
                if ( achou ) {
                    arrayInfos.push(item);
                }
            } )
            this.setState({tipoContas : arrayInfos})
        }
    }

    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <div>
                    <h4>Tipos de Conta</h4>
                    <div>
                        <input type="text" name="valor" placeholder="Filtrar" onBlur={this.filtrarValor.bind(this)}/>
                    </div>
                    {this.state.tipoContas !== null ? this.state.tipoContas.map((item) => {
                        return(
                            <React.Fragment key={item.id}>
                                <Route>
                                    <div>
                                        <Link to={`/TipoConta/${item.id -1}`}>{item.nome}</Link>
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