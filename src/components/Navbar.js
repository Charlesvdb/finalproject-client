import React from "react"
import './Navbar.css';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <nav className="navcontainer">

                <Link to="/allchallenges">
                    <img className="logostreet" src="/images/logo.png" alt="logo" />
                </Link>

                <Link to="/allchallenges"><strong>All challenges</strong></Link>
                <Link to="/startchallenge"><strong>Start a challenge</strong></Link>
                <Link to="/profile"><strong>Profile settings</strong></Link>
                <Link to="/friends"><strong>Friends</strong></Link>
                <Link to="/about"><strong>About</strong></Link>
                <Link to="/"><strong>Log out</strong></Link>
            </nav>            
        )
    }
}

export default Navbar