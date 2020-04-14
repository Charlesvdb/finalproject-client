import React from 'react'
import Footer from "../components/Footer"
import Warning from "../components/Warning"
import "./Signup.css"
import {signup} from "../utils/auth"

class Signup extends React.Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.state = {
                username: "",    
                password: ""
        }  
    }

    handleChange(event) {
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        signup(this.state)
        .then(() => {
            this.setState({
                error: null
            }, () => {
                this.props.history.push("/login")
            })
        })
        .catch((error) => {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <div className="signuppage">
                <Warning/>
                <h1>Become part of our community!</h1>
                <h2>Create a username and password first, daredevil!</h2>
                
                <form className="formcontainer" onSubmit={this.handleFormSubmit}>
                    <div className="userpart">
                        <label className="userlabel" htmlFor="username">First name:</label><br></br>
                        <input className="userform" type="text" name="username" value={this.state.username} placeholder="How should we call you, legend?" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <div className="passwordpart">
                        <label className="passwordlabel" htmlFor="username">Password:</label><br></br>
                        <input className="passwordform" type="password" name="password" value={this.state.password} placeholder="Which password will keep all your crazy pictures safe?" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    <button className="signupbutton">Sign up</button>
                </form>
                
                <img className="pictureplank" src="/images/planking2.jpg" alt="plankingpic" />                

                <Footer/>
            </div>
        )
    }
}

export default Signup