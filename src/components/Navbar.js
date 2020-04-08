import React from "react"

class Navbar extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <nav className="navcontainer">
                <a href="/allchallenges">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="#">LOGIN/LOGOUT</a>
                <a href="#">HOW IT WORKS</a>
            </nav>            
        )
    }
}

export default Navbar