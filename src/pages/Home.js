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
        axios.get(`${process.env.REACT_APP_API_BASE}/name`)
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
                    <h1>StreetCredit</h1>
                </div>
                
                <div className="buttoncontainer">
                    <Link to="/signup"><button className="signuplogin">Sign up you coward!</button></Link>
                    <Link to="/login"><button className="signuplogin">Log in & enjoy the ride!</button></Link>
                </div>

                <br/>

                <div className="row"> 
                    <div className="column">
                        <img src="/images/horsemanning1.jpg" style={{width:545}} alt=""/>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Home