import React from 'react'
import DefaultLayout from "../layout/Default"
import Challengebox from '../components/Challengebox'
import axios from "axios";
import "./Allchallenges.css"

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
            const challenges = this.state.challenges.filter(challenge => challenge._id !== challengeId)
            this.setState({challenges})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <DefaultLayout>
                <div className="challengeoverviewlist">
                    <h1>All challenges</h1>   

                    <div className="sortingbuttons">
                        <button className="sorttitle">
                            Sort based on TITLE
                        </button>

                        <button className="sortdescription">
                            Sort based on DESCRIPTION
                        </button>

                        <button className="sortdaredevils">
                            Sort based on DAREDEVILS
                        </button>
                    </div>

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
                                
                                    <button className="deletebutton" onClick={() => this.onDelete(challenge._id)}>
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