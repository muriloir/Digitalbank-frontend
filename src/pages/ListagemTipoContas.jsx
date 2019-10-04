import * as axios from 'axios';
import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

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
        this.setState({tipoContas : response.data.tipos})})
    }

    filtrarValor(evt){
        const lista = this.state.tipoContas;
        if(lista != null || lista !== undefined){
            let arrayInfos=[];
            lista.forEach( ( item ) => {
                let achou = item.nome.match(evt.target.value)
                if ( achou ) {
                    arrayInfos.push(item);
                }
            } )
            this.setState({tipoContas : arrayInfos})
        }if(evt.target.value === ''){
            const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
            axios.get('http://localhost:1337/tipoContas', (config)).then( response => {
            this.setState({tipoContas : response.data.tipos})})
        }
    }

    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <div className="mx-5">
                    <h4 className="my-3">Tipo de Contas</h4>
                    <div>
                        <input class="form-control col-md-3" type="text" name="valor" placeholder="Filtrar por nome" onChange={this.filtrarValor} />
                    </div>
                    {this.state.tipoContas !== null && 
                    <Card valor= {this.state.tipoContas} url="/tipoConta/" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQdflZTwBVIyn99eOD2IwcA-iEWgY-V4KSnKm-tKK6U_KZOD0w"/>}
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}