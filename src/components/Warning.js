import React from "react"
import './Warning.css';

class Warning extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <p className="warning">  An app to challenge friends and have fun! | WARNING: Not responsible for any injuries...#safetyfirst</p>
        )
    }
}

export default Warning


