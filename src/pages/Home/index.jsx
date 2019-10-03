import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Cover from 'react-video-cover';
import { MDBContainer, MDBView, MDBBtn } from 'mdbreact';
import './Home.css';
import Footer from '../../components/Footer';

export default class Home extends Component {
    render() {
        const videoOptions = {
            src: 'https://storage.coverr.co/videos/Coverr-Highrise?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTcwMTIwODQxfQ.8MGzb2STn2u1ah0VZN1H4rXIzL9Wllh4SgkN5ORnjyI',
            autoPlay: true,
            muted: true,
            loop: true,
        }
        return (
            <div id="container">
                <Navbar />
                <MDBView className="filter">
                    <div className="videoCover" >
                        <Cover
                            videoOptions={videoOptions}
                            remeasureOnWindowresize
                            getResizeNotifier={resizeNotifier => {
                                this.state({
                                    resizeNotifier,
                                });
                            }}
                        />
                    </div>
                    <MDBContainer className="black-text text-center textVideo" id="tt">
                        <h2 id="title2" className="mt-5">Somos Transformação</h2>
                        <h1 id="title1" className="mt-2">Somos DIGITAL :) </h1>
                        <br/>
                        <h3 id="title3" className="mt-5"> Já possui cadastro? </h3>
                        <MDBBtn className="pink darken-1 mb-5 mt-2"><a href="/login" className="white-text">ENTRAR</a></MDBBtn>
                    </MDBContainer>
                </MDBView>
                <Footer/>
            </div>
        );
    }
}