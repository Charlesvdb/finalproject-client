import React from "react"
import axios from "axios"
import Warning from "../components/Warning"
import './Home.css';
import Footer from "../components/Footer"
import {Link} from "react-router-dom"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
          charles: {}  
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_BASE}name`)
        .then(response => {
            this.setState({
                charles: response.data
            })
        })
    }

    render() {
        return (
            <div className="homepage">
                <Warning/>
                
                <div>
                    <img className="logostreethome" src="/images/logo.png" alt="logo" />
                </div>
                
                <div className="buttoncontainer">
                    <Link to="/signup"><button className="signuplogin">Sign up you coward!</button></Link>
                    <Link to="/login"><button className="signuplogin">Log in & enjoy the ride!</button></Link>
                </div>

                <div className="row"> 
                    <div className="column2">
                        <div className="redline"></div>
                        <div className="redline"></div>
                        
                        <div className="rowimages">
                            <div className="parent1">
                                <img src="/images/iphone.jpg" className="imagehome1" alt=""/>
                                <img className="logostreethomesmall1" src="/images/logo.png" alt="logo" />
                                <img className="icebucket" src="/images/icebucket.jpg" alt="logo" />
                            </div>

                            <img src="/images/horsemanning1.jpg" className="imagehome2" alt=""/>

                            <div className="parent3">
                                <img src="/images/iphone.jpg" className="imagehome3" alt=""/>
                                <img className="logostreethomesmall3" src="/images/logo.png" alt="logo" />
                                <img className="plankinghome" src="/images/plankinghome.jpg" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Home