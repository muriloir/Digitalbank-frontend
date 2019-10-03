import * as axios from 'axios';

export default class RequestApi {
    constructor() {   
        this.baseUrl = `http://localhost:1337`
        this.data=[];
    }

    async reqApi( url, typeReq, id ) {
        const config = {headers:{ Authorization : localStorage.getItem("Authorization")}}
        url += typeReq ?  `${typeReq}` : ''
        url += id ? `/${id}` : ''
        axios.get(`${this.baseUrl}${url}`,(config))
        .then( resp => {
            this.data = resp.data;
        }).catch( function ( error ) {
            console.log( "Erro ao realizar a requisição: "+url+" "+ error )
        })
    }

    async reqLogin( url, typeReq, params ) {
        url += typeReq ? `${ typeReq }` : ''
        axios.post( `${ this.baseUrl }${ url }`, params )
        .then( resp => {
            localStorage.setItem('Authorization', resp.data.token)
        }).catch( function ( error ) {
            console.log( "Erro ao realizar a requisição: "+url+" "+ error )
        })
    }

    returnType(typeRequest) {
        switch (typeRequest) {
            case "GET":
                return "";
            case "POST":
                return "";
            default:
                break;
        }
    }

    requestLogin(typeRequest, params) {
        let reqs = this.returnType( typeRequest )
        this.reqLogin( '/login', reqs, params )
    }

    requestAgencias(typeRequest) {
        let reqs = this.returnType( typeRequest )
        this.reqApi( '/agencias', reqs )
    }

    requestAgenciaID(typeRequest, id) {
        var reqs = this.returnType( typeRequest )
        this.reqApi( '/agencia', reqs, id )
    }

    requestClientes(typeRequest) {
        let reqs = this.returnType( typeRequest )
        this.reqApi( '/clientes', reqs )
    }

    requestClienteID(typeRequest, id) {
        var reqs = this.returnType( typeRequest )
        this.reqApi( '/cliente', reqs, id )
    }

    requestTipoContas(typeRequest) {
        let reqs = this.returnType( typeRequest )
        this.reqApi( '/tipoContas', reqs )
    }

    requestTipoContaID(typeRequest, id) {
        var reqs = this.returnType( typeRequest )
        this.reqApi( '/tipoConta', reqs, id )
    }

    requestContaClientes(typeRequest) {
        let reqs = this.returnType( typeRequest )
        this.reqApi( '/conta/clientes', reqs )
    }

    requestContaClienteID(typeRequest, id) {
        var reqs = this.returnType( typeRequest )
        this.reqApi( '/conta/cliente', reqs, id )
    }
}