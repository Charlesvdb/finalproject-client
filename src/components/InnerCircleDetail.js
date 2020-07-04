import React from 'react'
import './Frienddetail.css'
import './InnerCircleDetail.css'

class InnerCircleDetail extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
                <div className="innercirclebox">
                    <img className="imagedaredevilspicdetailinnercircle" src="/images/profileimage.png" alt="picturesetting" />
                    <p className="friend">{this.props.username}</p>
                    <button className="removefrominnercircle" onClick={(e)=> this.props.deleteCircle(this.props.id)}>Remove!</button>
                </div>
        )
    }
}

export default InnerCircleDetail