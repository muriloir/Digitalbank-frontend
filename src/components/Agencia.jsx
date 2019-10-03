import * as axios from 'axios';
import React, {Component} from 'react';

export default class Agencia extends Component {
    componentWillMount() {
        const { match: { params } } = this.props;
        const config = { headers: {Authorization : localStorage.getItem('Authorization')}}
        axios.get(` http://localhost:1337/agencia/${params.id}`,config).then(response =>{
        const agEsp = response.data.agencias;
        this.setState({agencia : agEsp})
    })}
    carregou() {
        return this.state === null ? false : true;
    }
    render () {
        return(
            <React.Fragment>
                {this.carregou() ?  
                <div key={this.state.agencia.id}>
                    <h2> Agência {this.state.agencia.nome}</h2>
                    <p>
                        End: {this.state.agencia.endereco.logradouro},
                        {this.state.agencia.endereco.numero} - 
                        {this.state.agencia.endereco.cidade} -
                        {this.state.agencia.endereco.bairro} / 
                        {this.state.agencia.endereco.uf}.
                    </p>
                </div> : ''}
            </React.Fragment>
        );
    }
}