import React from "react"
import './Navbar.css';
import {Link} from "react-router-dom";
import {logout, getUser} from "../utils/auth"

class Navbar extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    handleLogout(user){
        logout(user)
    }

    handleUser(user){
        const theLoggedUser = getUser(user)
        return theLoggedUser.username
    }

    // handleUserImage(user){
    //     const theLoggedUser = getUser(user)
    //     return theLoggedUser.imageUrl
    // }

    // handleUserLocation(user){
    //     const theLoggedUser = getUser(user)
    //     return theLoggedUser.location
    // }

    render() {
        return (
            <nav className="navcontainer">
                <Link to="/allchallenges"><img className="logostreet" src="/images/logo.png" alt="logo" /></Link>
                <Link to="/allchallenges"><strong>All challenges</strong></Link>
                <Link to="/startchallenge"><strong>Start a challenge</strong></Link>
                <Link to="/profile"><strong>Profile settings</strong></Link>
                <Link to="/friends"><strong>Friends</strong></Link>
                <Link to="/about"><strong>About</strong></Link>
                <Link to="/" onClick={this.handleLogout}><strong>Log out</strong></Link>
                <p className="welcomemessage">{this.handleUser()} </p>
                {/* <p className="welcomemessage">Welcome {this.handleUserLocation()}</p> */}
                {/* <p className="welcomemessage">Welcome {this.handleUserImage()}</p> */}
            </nav>            
        )
    }
}

export default Navbar