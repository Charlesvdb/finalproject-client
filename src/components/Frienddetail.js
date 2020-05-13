import React from 'react'
import './Frienddetail.css'

class Frienddetail extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (

                <div className="friendbox">
                    <img className="imagedaredevilspicdetail" src="/images/profileimage.png" alt="picturesetting" />
                    <p className="friend">{this.props.username}</p>
                    <p className="friend">{this.props.location}</p>
                    <button className="followbutton">Follow friend</button>
                </div>

        )
    }
}

export default Frienddetail