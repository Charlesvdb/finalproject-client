import React from 'react'
import DefaultLayout from "../layout/Default"
import Challengebox from '../components/Challengebox'
import axios from "axios";
import "./Allchallenges.css"

class Allchallenges extends React.Component {
    constructor() {
        super()

        this.state = {
           challenges: [],
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

                        <input className="searchbox" type="text" placeholder="Search for a challenge title here..." onChange={this.searchChallenges} />

                        <p className="resultsbox">0 challenges</p>

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