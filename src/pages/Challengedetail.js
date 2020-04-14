import React from 'react'
import DefaultLayout from "../layout/Default"
import './Challengedetail.css'
import Responsechallenge from '../components/Responsechallenge'

class Challengedetail extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <DefaultLayout>
                <div className="challengedetailpage">
                    <div className="challengesectionbox">
                        <h1>Challenge title</h1>
                        <p>Challenge description</p>
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