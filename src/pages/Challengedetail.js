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
            response: ""
        }
    }

    componentDidMount(){
        debugger
        axios({
            method: "GET",
            url: "http://localhost:3000/challengedetail/:id",
            withCredentials: true
        })
        .then(response => {
            let responseData = response.data
            this.setState({
                response: responseData
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
                        <div className="challengesectionbox">
                            <h1>{this.state.response.title}dddddd</h1>
                            <p>{this.state.response.description}dddddddddddd</p>
                        </div>

                        <div className="takechallengebox">
                            <TakeChallenge/>
                        </div>
                    </div>
                    <div className="responsechallenges">
                        <Responsechallenge/>
                        <Responsechallenge/>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default Challengedetail