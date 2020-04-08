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
        axios.get("http://localhost:3000/name")
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
                    <button className="signuplogin">Log in & enjoy the ride!</button>
                </div>

                <br/>
                <br/>    
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="row"> 
                    <div className="column">
                        <img src="/images/corn.jpg" style={{width: 250}}/>
                        <img src="/images/crazy.jpg" style={{width:250}}/>
                        <img src="/images/planking2.jpg" style={{width:280}}/>
                        <img src="/images/horsemanning1.jpg" style={{width:245}}/>
                        <img src="/images/planking.jpg" style={{width:260}}/>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Home