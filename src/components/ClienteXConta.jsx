import * as axios from 'axios';
import React, {Component} from 'react';
import{ Link } from 'react-router-dom';

export default class ClienteXConta extends Component {
   
    componentWillMount() {
        const { match: { params } } = this.props;
        const config = { headers: {Authorization : localStorage.getItem('Authorization')}}
        axios.get(` http://localhost:1337/conta/cliente/${params.id}`,config).then(response =>{
        const ccEsp = response.data.conta;
        this.setState({contaCliente : ccEsp})
    })}

    carregou() {
        return this.state == null? false:true
    }

    render () {
        return(
            <React.Fragment>
                {this.carregou() ?  
                <div key={this.state.contaCliente.id}>
                    <p>
                        <Link to={`/TipoConta/${this.state.contaCliente.tipo.id -1}`}>{this.state.contaCliente.tipo.nome}</Link> <br />
                        <Link to={`/Cliente/${this.state.contaCliente.cliente.id -1}`}>{this.state.contaCliente.cliente.nome}</Link>
                    </p>
                </div> : ''}
            </React.Fragment>
        );
    }
}
