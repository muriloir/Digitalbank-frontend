import * as axios from 'axios';
import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

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
                <div className="mx-5">
                    <h4 className="my-3">Clientes x Conta</h4>
                    {this.state.clientesConta !== null && 
                    <Card valor= {this.state.clientesConta} url="/conta/cliente/" imagem="https://pngimage.net/wp-content/uploads/2018/05/cliente-feliz-png-4.png"/>}
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}