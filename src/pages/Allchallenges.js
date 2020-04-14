import React from 'react'
import DefaultLayout from "../layout/Default"
import Challengebox from '../components/Challengebox'
import {Link} from "react-router-dom"


class Allchallenges extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <DefaultLayout>
                <h1>All challenges</h1>
            
                <Link to="/challengedetail"><Challengebox/></Link>
                <Challengebox/>
            </DefaultLayout>
        )
    }
}

export default Allchallenges