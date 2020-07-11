import React from 'react'
import DefaultLayout from "../layout/Default"
import './Challengedetail.css'
import Responsechallenge from '../components/Responsechallenge'
import axios from "axios"
import TakeChallenge from "../components/Takechallenge"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Challengedetail extends React.Component {
    constructor() {
        super()

        this.state = {
            title:"",
            description:"",
            responses: []
        }
    }

    componentDidMount(){
        const challengeId = this.props.match.params.id
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE}/challengedetail/${challengeId}`,
            withCredentials: true
        })
        .then(response => {
            this.setState({
                title: response.data.title,
                description: response.data.description
            })
        })
        .catch(error => {
            console.log("Charles this is an error: ", error)
        })
    }

    render() {
        return (
            <DefaultLayout>
                <div className="challengedetailpage">
                    <div className="headercontainer">
                        <div className="leftpart">
                            <div className="challengesectionbox">
                                <h1>{this.state.title}</h1>
                                <p>{this.state.description}</p>
                            </div>

                            <div className="takechallengebox">
                                <TakeChallenge/>
                            </div>
                        </div>

                        <div className="rightpart">
                            <div className="likedislikesbox">
                                <div className="likecontainer">
                                    <div className="leftalignment"><FontAwesomeIcon icon={faThumbsUp}/></div>
                                        <p className="likestat">1 like</p>
                                </div>
                                
                                <div className="dislikecontainer">
                                    <div className="leftalignment"><FontAwesomeIcon icon={faThumbsDown}/></div>
                                    <p className="dislikestat">1 dislike</p>
                                </div>

                                <div className="satisfactioncontainer">
                                    <div className="leftalignment"><FontAwesomeIcon icon={faBalanceScale}/></div>
                                    <p className="satisfactionstat">50% likes/dislikes</p>
                                </div>
                            </div>

                            <div className="statsbox">
                                <p className="titlestat">Key Statistics</p>
                                <div className="statslist">
                                    <p>Date posted: <strong>{this.state.title.length}</strong></p>
                                    <p>Amount of responses: <strong>{this.state.title.length}</strong></p>
                                    <p>Amount of likes: <strong>{this.state.title.length}</strong></p>
                                    <p>Amount of dislikes: <strong>{this.state.title.length}</strong></p>
                                    <p>Amount of superlikes: <strong>{this.state.title.length}</strong></p>
                                </div>
                        </div>
                        </div>



                    </div>
                    
                    <div className="responsechallenges">
                        <Responsechallenge/>
                        <Responsechallenge/>
                        <Responsechallenge/>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default Challengedetail