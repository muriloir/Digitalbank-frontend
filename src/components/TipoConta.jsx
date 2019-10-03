import * as axios from 'axios';
import React, {Component} from 'react';

export default class TipoConta extends Component {
   
    componentWillMount() {
        const { match: { params } } = this.props;
        const config = { headers: {Authorization : localStorage.getItem('Authorization')}}
        axios.get(` http://localhost:1337/tiposConta/${params.id}`,config).then(response =>{
        const tpEsp = response.data.tipos;
        this.setState({tipoConta : tpEsp})
    })}

    carregou() {
        return this.state == null? false:true
    }

    render () {
        return(
            <React.Fragment>
                {this.carregou() ?  
                <div key={this.state.tipoConta.id}>
                    <h2> Conta {this.state.tipoConta.nome}</h2>
                    <p>
                        ID: {this.state.tipoConta.id} - 
                    </p>
                </div> : ''}
            </React.Fragment>
        );
    }
}
