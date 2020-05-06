import React from 'react'
import Footer from "../components/Footer"
import Warning from "../components/Warning"
import "./Login.css"
import { login } from '../utils/auth'

class Login extends React.Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.state = {
            user: { // remove?
                username: "",
                password: ""    
            }
        }
    }

    handleChange(event){
        event.preventDefault()
        let userCopy = {...this.state.user}
        userCopy[event.target.name] = event.target.value
        this.setState({
            user: userCopy
        })
    }

    handleFormSubmit(event){
        event.preventDefault()
        login(this.state.user)
        .then((response) => {
                console.log("You log in")
                this.setState({
                    error: null
                }, () => {
                    console.log("You log in 2")
                    this.props.history.push("/allchallenges")
                })
            } 
        )
        .catch((error) => {
            console.log("You don't log in")
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <div className="loginpage">
                <Warning/>
                <h1>Login and start challenging your friends!</h1>
                <h2>Show us what you got!</h2>
                
                <form className="formcontainerlogin" onSubmit={this.handleFormSubmit}>
                    <div className="userpart">
                        <label className="userlabel">First name:</label><br></br>
                        <input className="userform" type="text" name="username" value={this.state.username} placeholder="What was your username again?" onChange={(event) => this.handleChange(event)}></input>
                    </div>

                    <div className="passwordpart">
                        <label className="passwordlabel">Password:</label><br></br>
                        <input className="passwordform" type="text" name="password" value={this.state.password} placeholder="We bet you forgot your password again..." onChange={(event) => this.handleChange(event)}></input>
                    </div>
                    <button className="loginbutton">Log in</button>
                </form>
                
                <img className="pictureplank" src="/images/corn.jpg" alt="plankingpic" />
                
                <Footer/>
            </div>
        )
    }
}

export default Login