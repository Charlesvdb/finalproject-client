import React from 'react'
import DefaultLayout from "../layout/Default"
import Challengebox from '../components/Challengebox'
import axios from "axios";

class Allchallenges extends React.Component {
    constructor() {
        super()

        this.state = {
           challenges: [] 
        }
    }

    componentDidMount(){
        debugger
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE}/allchallenges`,
            withCredentials: true
        })
        .then(response => {
            console.log(response)
            let challengeslist = response.data;
            this.setState({challenges: challengeslist})
        })
        .catch(error => {
            console.log("You've made an error charles: ",error)
        })
    }

    render() {
        return (
            <DefaultLayout>
                <div className="challengeoverviewlist">
                    <h1>All challenges</h1>   

                    <div className="challengeboxes">
                    
                    {    
                    this.state.challenges.map(challenge => (<Challengebox key={challenge._id} id={challenge._id} title={challenge.title} description={challenge.description}/>))      
                    }
                    
                    </div>

                </div>    
            </DefaultLayout>
        )
    }
}

export default Allchallenges