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
               user: {
                username: "",    
                password: ""
               } 
        }  
    }

    handleChange(event) {
        event.preventDefault()
        let userCopy = {...this.state.user}
        userCopy[event.target.name] = event.target.value
        this.setState({
            user: userCopy
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        signup(this.state.user)
        .then((response) => {
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
                
                <form className="formcontainersignup" onSubmit={this.handleFormSubmit}>
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