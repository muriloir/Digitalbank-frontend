import * as axios from 'axios';
import React, {Component} from 'react';
import{ Link } from 'react-router-dom';

export default class Cliente extends Component {
   
    componentWillMount() {
        const { match: { params } } = this.props;
        const config = { headers: {Authorization : localStorage.getItem('Authorization')}}
        axios.get(` http://localhost:1337/cliente/${params.id}`,config).then(response =>{
        const clEsp = response.data.cliente;
        this.setState({cliente : clEsp})
    })}

    carregou() {
        return this.state == null? false:true
    }

    render () {
        return(
            <React.Fragment>
                {this.carregou() ?  
                <div key={this.state.cliente.id}>
                    <h2> Cliente {this.state.cliente.nome}</h2>
                    <p>
                        {this.state.cliente.cpf} - 
                        <Link to={`/Agencia/${this.state.cliente.agencia.id -1}`}>{this.state.cliente.agencia.nome}</Link>
                    </p>
                </div> : ''}
            </React.Fragment>
        );
    }
}
