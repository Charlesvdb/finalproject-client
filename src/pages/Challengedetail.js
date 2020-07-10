import React from 'react'
import DefaultLayout from "../layout/Default"
import './Challengedetail.css'
import Responsechallenge from '../components/Responsechallenge'
import axios from "axios"
import TakeChallenge from "../components/Takechallenge"

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

                        <div className="statsbox rightpart">
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