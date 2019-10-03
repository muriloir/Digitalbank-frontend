import React, {Component} from 'react';
import FormPage from '../components/Login/FormPage';
import Footer from '../components/Footer';

export default class Login extends Component{
    render() {
        return (
        <div>
            <FormPage history= {this.props.history}/>
            <Footer/>
        </div>
        );
    }
}