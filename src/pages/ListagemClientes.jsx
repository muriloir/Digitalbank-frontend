import * as axios from 'axios';
import React, {Component} from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import Card from '../components/Card';

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
        this.setState({clientes : response.data.clientes})})
    }


    filtrarValor(evt){
        const lista = this.state.clientes;
        if(lista){
            let arrayInfos=[];
            lista.forEach( ( item ) => {
                let achou = item.nome.match(evt.target.value)
                if ( achou ) {
                    arrayInfos.push(item);
                }
            } )
            this.setState({clientes : arrayInfos})
        }if(evt.target.value === ''){
            const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
            axios.get('http://localhost:1337/agencias', (config)).then( response => {
            this.setState({clientes : response.data.clientes})})
        }
    }

    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <div className="mx-5">
                    <h4 className="my-3">Clientes</h4>
                    <div>
                        <input class="form-control col-md-3" type="text" name="valor" placeholder="Filtrar por nome" onChange={this.filtrarValor} />
                    </div>
                    {this.state.clientes !== null && 
                    <Card valor= {this.state.clientes} url="/cliente/" imagem="https://pngimage.net/wp-content/uploads/2018/05/cliente-feliz-png-4.png"/>}
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}