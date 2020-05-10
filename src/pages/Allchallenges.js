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

        this.onDelete=this.onDelete.bind(this)
    }

    componentDidMount(){
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

    onDelete(challengeId){
        axios
        .delete(`${process.env.REACT_APP_API_BASE}/allchallenges/${challengeId}`)
        .then(response => {
            this.props.history.push("/allchallenges")
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <DefaultLayout>
                <div className="challengeoverviewlist">
                    <h1>All challenges</h1>   

                    <div className="challengeboxes">
                    
                    {    
                    this.state.challenges.map(challenge => 
                        (
                            <div className="totalbox" key={challenge._id}>

                                <Challengebox 
                                    key={challenge._id} 
                                    id={challenge._id} 
                                    title={challenge.title} 
                                    description={challenge.description}
                                />
                            
                                <button onClick={() => this.onDelete(challenge._id)}>
                                    Delete
                                </button>

                            </div>
                        ))                                                                      
                    }
                    
                    </div>

                </div>    
            </DefaultLayout>
        )
    }
}

export default Allchallenges