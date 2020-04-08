import React from 'react'
import Footer from "../components/Footer"
import Warning from "../components/Warning"

class Signup extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="signuppage">
                <Warning/>
                <h1>Become part of our community!</h1>
                <h2>Create a username and password first, daredevil!</h2>
                
                <form className="formcontainer">
                    <label for="username">First name: </label>
                    <input type="text" name="username" placeholder="Give us your most creative username!"></input><br></br>

                    <label for="username">Password: </label>
                    <input type="text" name="password" placeholder="Which password will keep all your crazy pictures safe?"></input>
                </form>
                

                <Footer/>
            </div>
        )
    }
}

export default Signup