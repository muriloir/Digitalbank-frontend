import React, {Component} from 'react';
import FormPage from '../components/Login/FormPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Login extends Component{
    render() {
        return (
        <div>
            <Navbar/>
            <FormPage history= {this.props.history}/>
            <Footer/>
        </div>
        );
    }
}