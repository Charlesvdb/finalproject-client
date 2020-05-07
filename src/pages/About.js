import React from 'react'
import DefaultLayout from "../layout/Default"
import './About.css'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

class About extends React.Component {
    render() {

        const mapStyles = {
            width: '100%',
            height: '100%'
            };

        return (
            <DefaultLayout>
                <h1>About this app</h1>

                <div className="containerabout">
                    <section className="aboutcreator">
                        <h2>About the creator</h2>
                        <img className="leftbox" src="/images/charles.jpg" style={{width:230}} alt="picturecharles"/>
                        <ul className="rightbox">
                            <li>26-year old, Belgian national</li>
                            <li>Full-stack JavaScript developer (MERN stack)</li>
                            <li>Background in M&A investment banking</li>
                            <li>Fluent in Dutch, French and English</li>
                            <li>Interests: Football, Cycling, Tennis, Venture Capital</li>
                        </ul>
                    </section>
                    
                    <section className="locationmap">
                        <h2>Ironhack Amsterdam campus</h2>
    
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                                lat: 52.370962,
                                lng: 4.883245
                            }}
                        >
                        <Marker position={{ lat:52.370962, lng:4.883245}}/>
                    </Map>

                    </section>
                </div>
            </DefaultLayout>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDoNLDrCsLyfbQ7neWyxu_NogjdQ1GNTjM"
  })(About);
