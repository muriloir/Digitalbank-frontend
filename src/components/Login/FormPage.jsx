import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './Login.css';
import RequestApi from "../../Api/RequestApi";

export default class FormPage extends Component{
    constructor(props) {
        super(props);
        this.backData = new RequestApi();
        this.state={
            email: "",
            senha: ""
        }
        this.trocaValoresState = this.trocaValoresState.bind(this);
        this.logar = this.logar.bind(this);
    }
    trocaValoresState(e) {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    logar(e) {
        e.preventDefault();
        const { email, senha } = this.state
        if( email && senha ) {
            this.backData.requestLogin("POST", {
                email: this.state.email,
                senha: this.state.senha
            })
            this.props.history.push("/");
        }else{
            console.log("Login e/ou senha nulos.")
        }
    }
    render(){
        return (
            <MDBContainer>
                <MDBRow className="row justify-content-center my-3">
                    <MDBCol className="mt-5 col-md-5">
                        <form className="my-2">
                            <p className="h4 text-center mb-4"> Acessar </p>
                            <label htmlFor="email" className="grey-text">
                            Digite seu e-mail:
                            </label>
                            <input
                            name="email"
                            type="email"
                            onChange= {this.trocaValoresState}
                            id="email"
                            className="form-control"
                            />
                            <br />
                            <label htmlFor="senha" className="grey-text">
                            Sua senha:
                            </label>
                            <input
                            name="senha"
                            type="password"
                            onChange= {this.trocaValoresState}
                            id="senha"
                            className="form-control"
                            />
                            <div className="text-center mt-3 mb-2">
                            <MDBBtn className="pink darken-1" type="button" onClick= {this.logar} value="submit">Entrar</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}