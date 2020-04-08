import React from "react"
import './Footer.css';

class Footer extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <nav className="footer">
                © Copyright 2020 - StreetCredit - An initiative of Charles Van den Bergh
            </nav>            
        )
    }
}

export default Footer