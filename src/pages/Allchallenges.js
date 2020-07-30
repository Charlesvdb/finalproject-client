import React from 'react'
import DefaultLayout from "../layout/Default"
import Challengebox from '../components/Challengebox'
import Pagination from "../components/Pagination"
import axios from "axios";
import "./Allchallenges.css"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"

class Allchallenges extends React.Component {
    constructor() {
        super()

        this.state = {
           challenges: [],
           searchChallenges: [],
           pagepick: 4,
           page: 1
        }

        this.onDelete=this.onDelete.bind(this)
        this.sortByTitle=this.sortByTitle.bind(this)
        this.sortByDescription=this.sortByDescription.bind(this)
        this.searchChallenges=this.searchChallenges.bind(this)
        this.challengestotal=this.challengestotal.bind(this)
        this.handleLike=this.handleLike.bind(this)
        this.pageUp=this.pageUp.bind(this)
        this.pageDown=this.pageDown.bind(this)
        this.getAmountNumber = this.getAmountNumber.bind(this);
    }

    componentDidMount(){
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE}/allchallenges`,
            withCredentials: true
        })
        .then(response => {
            let challengeslist = response.data;
            this.setState({challenges: challengeslist, searchChallenges:challengeslist})
        })
        .catch(error => {
            console.log("You've made an error charles: ",error)
        })
    }

    onDelete(challengeId){
        axios
        .delete(`${process.env.REACT_APP_API_BASE}/allchallenges/${challengeId}`)
        .then(response => {
            const remainingChallenges = this.state.searchChallenges.filter(challenge => challenge._id !== challengeId)
            this.setState({searchChallenges:remainingChallenges})
        })
        .catch(err => console.log(err))
    }

    sortByTitle() {
        let challengesSortTitle = this.state.searchChallenges.sort((a,b) => {
            return a.title > b.title ? 1 : -1
        })
        this.setState({
            searchChallenges:challengesSortTitle
        })
    }

    sortByDescription() {
        let challengesSortDescription = this.state.searchChallenges.sort((a,b) => {
            return a.description > b.description ? 1 : -1
        })
        this.setState({
            searchChallenges:challengesSortDescription
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
            searchChallenges:challengesSearch
        })
    }

    challengestotal(){
        return `${this.state.searchChallenges.length}`
    }

    handleLike(challengeId){
        const likedchallenge = this.state.challenges.find(challenge => challenge._id === challengeId)      
        likedchallenge.likes++
        this.setState({
                
        })
    }

    handleDislike(challengeId){
        const likedchallenge = this.state.challenges.find(challenge => challenge._id === challengeId)      
        likedchallenge.dislikes++
        this.setState({
                
        })
    }

    getAmountNumber(e){
        Array.from(e.target.parentElement.children).forEach(a => 
            a.classList.remove("active")    
        )
        e.target.classList.add("active")
        this.setState({
            ...this.state,
            page: 1,
            pagepick: parseInt(e.target.textContent)
        })
    }    

    pageUp(){
        this.setState({
            ...this.state,
            page: (this.state.challenges.length - (this.state.page * this.state.pagepick) > 0) ? this.state.page + 1 : this.state.page
        })
    }

    pageDown(){
        this.setState({
            ...this.setState,
            page: ((this.state.page-1) < 1) ? 1 : (this.state.page - 1)
        })
    }


    render(){

        const start = this.state.pagepick * (this.state.page-1)
        const end = (this.state.pagepick * this.state.page)

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
                            Sort based on DAREDEVILSs
                        </button>

                        <input className="searchbox" type="text" placeholder="Search for a challenge title here..." onChange={this.searchChallenges} />

                        <p className="challengescounterbox">{this.challengestotal()} challenges</p>
                    </div>

                    <div className="challengeboxes">
                        {         
                        this.state.searchChallenges.slice(start,end).map(challenge => 
                            (
                                <div className="totalbox" key={challenge._id}>

                                    <div className="likedislikesboxchallenge">
                                        <div className="likecontainer">
                                            <div className="leftalignment"><FontAwesomeIcon icon={faThumbsUp} onClick={()=>this.handleLike(challenge._id)}/></div>
                                                <p className="likestat">{challenge.likes}</p>
                                        </div>
                                        
                                        <div className="dislikecontainer">
                                            <div className="leftalignment"><FontAwesomeIcon icon={faThumbsDown} onClick={()=>this.handleDislike(challenge._id)}/></div>
                                            <p className="dislikestat">{challenge.dislikes}</p>
                                        </div>

                                        <div className="satisfactioncontainer">
                                            <div className="leftalignment"><FontAwesomeIcon icon={faBalanceScale}/></div>
                                            <p className="satisfactionstat">{(challenge.likes/(challenge.dislikes + challenge.likes)*100).toFixed(0) === "NaN" ? 0 : (challenge.likes/(challenge.dislikes + challenge.likes)*100).toFixed(0)}%</p>
                                        </div>
                                    </div>

                                    <Link to={`/challengedetail/${challenge._id}`}>
                                        <Challengebox 
                                            key={challenge._id} 
                                            id={challenge._id} 
                                            title={challenge.title} 
                                            description={challenge.description}
                                        />
                                    </Link>
                                
                                    <button className="deletebutton" onClick={()=> this.onDelete(challenge._id)}>
                                        Delete 
                                    </button>
                                </div>
                            ))                                                                      
                        }
                    </div>
                
                    <div className="paginationresult">
                        <Pagination pageUp={this.pageUp} pageDown={this.pageDown} getAmountNumber={this.getAmountNumber} />
                    </div>    
                </div>    
            </DefaultLayout>
        )
    }
}

export default Allchallenges