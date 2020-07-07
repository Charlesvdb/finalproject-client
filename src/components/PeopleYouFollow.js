import React from 'react'
import './PeopleYouFollow.css'

class PeopleYouFollow extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
                <div className="peopleyoufollowbox">
                    <img className="imagedaredevilspicdetailpeopleyoufollow" src="/images/profileimage.png" alt="picturesetting" />
                    <p className="friend">{this.props.username}</p>
                    <button className="followbutton" onClick={(e)=> this.props.peopleFollow(this.props.id)}>Stop following!</button>
                </div>
        )
    }
}

export default PeopleYouFollow