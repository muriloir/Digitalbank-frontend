import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

export default class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <MDBRow className="text-center my-2 px-2 py-2">
                {this.props.valor.map((item) => {
                    return (
                        <MDBCol className="col-md-3 my-5">
                        <div key={item.id}>
                            <div className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src={this.props.imagem} alt="Card image cap" />
                                    <a>
                                        <div className="mask rgba-white-slight">
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body pink darken-1 white-text rounded-bottom">
                                    <h4 className="card-title">
                                        {item.nome !== undefined ? item.nome : item.cliente.nome}
                                    </h4>
                                    <hr className="hr-light" />
                                    <p className="card-text white-text mb-4">
                                        Para saber mais detalhes, basta clicar logo abaixo.
                                    </p>
                                    <a href="#!" className="white-text d-flex justify-content-end">
                                            <Route>
                                                <div>
                                                    <Link className="white-text" to={`${this.props.url}${item.id - 1}`}> Mais detalhes </Link>
                                                </div>
                                            </Route>
                                            <i className="fas fa-angle-double-right mx-2">
                                            </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </MDBCol>
                    );
                })}
                </MDBRow>
            </React.Fragment>
        );
    }
}