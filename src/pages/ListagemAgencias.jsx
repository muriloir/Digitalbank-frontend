import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';    
import * as axios from 'axios'; 
import Card from '../components/Card';

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
        }if(evt.target.value === ''){
            const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
            axios.get('http://localhost:1337/agencias', (config)).then( response => {
            this.setState({agencias : response.data.agencias})})
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                    <div className="mx-5">
                        <h4 className="my-3">Agências</h4>
                        <div>
                            <input class="form-control col-md-3" type="text" name="valor" placeholder="Filtrar por nome" onChange={this.filtrarValor} />
                        </div>
                        {this.state.agencias !== null && 
                        <Card valor= {this.state.agencias} url="/agencia/" imagem="https://image.flaticon.com/icons/png/512/2035/2035796.png"/>}
                    </div>
                <Footer />
            </React.Fragment>
        );
    }
}