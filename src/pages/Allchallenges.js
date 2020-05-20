import React from 'react'
import DefaultLayout from "../layout/Default"
import Challengebox from '../components/Challengebox'
import axios from "axios";
import "./Allchallenges.css"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Allchallenges extends React.Component {
    constructor() {
        super()

        this.state = {
           challenges: []
        }

        this.onDelete=this.onDelete.bind(this)
        this.sortByTitle=this.sortByTitle.bind(this)
        this.sortByDescription=this.sortByDescription.bind(this)
        this.searchChallenges=this.searchChallenges.bind(this)
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

    sortByTitle() {
        let challengesSortTitle = this.state.challenges.sort((a,b) => {
            return a.title > b.title ? 1 : -1
        })
        this.setState({
            challenges:challengesSortTitle
        })
    }

    sortByDescription() {
        let challengesSortDescription = this.state.challenges.sort((a,b) => {
            return a.description > b.description ? 1 : -1
        })
        this.setState({
            challenges:challengesSortDescription
        })
    }

    searchChallenges(e){ // eslint-disable-next-line
        let challengesSearch = this.state.challenges.filter(challenge => { 
            if(challenge.title){
                if(challenge.title.toLowerCase().includes(e.target.value.toLowerCase())){
                    return true 
                }   
            }
        })
        this.setState({
            challenges:challengesSearch
        })
    }

    challengestotal(){
        return `${this.state.challenges.length}`
    }

    render(){
        return (
            <DefaultLayout>
                <div className="challengeoverviewlist">
                    <h1>All challenges</h1>   

                    <div className="headers">
                        <button onClick={this.sortByTitle} className="sorttitle">
                            Sort based on TITLE
                        </button>

                        <button onClick={this.sortByDescription} className="sortdescription">
                            Sort based on DESCRIPTION
                        </button>

                        <button onClick={this.sortByDescription} className="sortdescription">
                            Sort based on DAREDEVILS
                        </button>

                        <input className="searchbox" type="text" placeholder="Search for a challenge title here..." onChange={this.searchChallenges} />

                        <p className="challengescounterbox">{this.challengestotal()} challenges</p>
                    </div>

                    <div className="challengeboxes">
                        {    
                        this.state.challenges.map(challenge => 
                            (
                                <div className="totalbox" key={challenge._id}>

                                    <div className="likedislikesbox">
                                        <div className="likecontainer">
                                            <div><FontAwesomeIcon icon={faThumbsUp}/></div>
                                            <p className="likestat">Like</p>
                                        </div>
                                        
                                        <div className="dislikecontainer">
                                            <div><FontAwesomeIcon icon={faThumbsDown}/></div>
                                            <p className="dislikestat">Dislike</p>
                                        </div>

                                        <div className="satisfactioncontainer">
                                            <div><FontAwesomeIcon icon={faBalanceScale}/></div>
                                            <p className="satisfactionstat">Satisf %</p>
                                        </div>
                                    </div>

                                    <Challengebox 
                                        key={challenge._id} 
                                        id={challenge._id} 
                                        title={challenge.title} 
                                        description={challenge.description}
                                    />
                                
                                    <button className="deletebutton">
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