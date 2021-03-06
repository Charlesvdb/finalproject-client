import React from 'react'
import DefaultLayout from "../layout/Default"
import './Friends.css'
import Axios from 'axios'
import Frienddetail from '../components/Frienddetail'
import InnerCircleDetail from '../components/InnerCircleDetail'
// import PeopleYouFollow from '../components/PeopleYouFollow'
import { getUser } from '../utils/auth'
import qs from "qs"


class Friendsfollowers extends React.Component {
    constructor() {
        super()

        this.state = {
            friends: [],
            searchFriends: [],
            innerCircle: []      
        }
        
        this.searchFriends=this.searchFriends.bind(this)
        this.addToInnerCircle=this.addToInnerCircle.bind(this)
        this.deleteFromInnerCircle=this.deleteFromInnerCircle.bind(this)
    }

    componentDidMount(){ 
        Axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE}/friends`,
            withCredentials: true       
        })
        .then(response =>{
            console.log(response)
            let friendslist = response.data // eslint-disable-next-line
            let friendslistupdate = friendslist.filter(friend => {
                if(friend.username){
                    if(friend.username !== getUser().username){
                        return true
                    }
                }
            })
            this.setState({
                friends: friendslistupdate,
                searchFriends: friendslistupdate
            })
        })
        .catch(error =>{
            console.log("Charles made an error when retrieving all friends: ",error)
        })
    }

    searchFriends(e){ 
        let friendsearched = this.state.friends.filter(friend => { 
            if(friend.username){
                if(friend.username.toLowerCase().includes(e.target.value.toLowerCase())){
                    return true
                }
            }
        })
        this.setState({
            searchFriends:friendsearched
        })
    }

    addToInnerCircle(idclicked){
        let idpicked = this.state.friends.find(friend => friend._id === idclicked)._id
        let idresultarr = [...this.state.innerCircle,idpicked]
        this.setState({
            ...this.state,
            innerCircle : idresultarr
        })
    }

    deleteFromInnerCircle(iddelete){
        let newInnerCircle = this.state.innerCircle.filter(friend => friend !== iddelete)
        this.setState({
            ...this.state,
            innerCircle : newInnerCircle
        })
    }

    // addPeopleFollow(idpeopleyoufollow){
    //     Axios({
    //         method: "POST",
    //         url: `${process.env.REACT_APP_API_BASE}/friends`,
    //         data: qs.stringify(idpeopleyoufollow),
    //         headers: {"content-type": "application/x-www-form-urlencoded"},
    //         withCredentials: true
    //     })
    //     .then(() => {
    //         console.log(idpeopleyoufollow)
    //     })
    //     .catch((error) => {
    //         console.log(error.response)
    //     })
    // }

    RemovePeopleYouFollow(){
        //tobeadded
    }

    sortFriendsAZ(){
        let friendsAZ = this.state.searchFriends.sort((a,b) => {
            return a.username > b.username? 1 : -1
        })
        this.setState({
            searchFriends: friendsAZ
        })
    }

    sortFriendsZA(){
        let friendsZA = this.state.searchFriends.sort((a,b) => {
            return a.username < b.username? 1 : -1
        })
        this.setState({
            searchFriends: friendsZA
        })
    }

    sortLengthHL(){
        let lengthHL = this.state.searchFriends.sort((a,b) => {
            return a.username.length < b.username.length ? 1 : -1
        })
        this.setState({
            searchFriends: lengthHL
        })
    }

    sortLengthLH(){
        let lengthLH = this.state.searchFriends.sort((a,b) => {
            return a.username.length > b.username.length ? 1 : -1
        })
        this.setState({
            searchFriends: lengthLH
        })
    }

    randomSorter(){
        let randomSorter = this.state.searchFriends.sort((a,b) => {
           return Math.random() > 0.5 ? 1 : -1
        })
        this.setState({
            searchFriends: randomSorter
        })
    }

    render() {
        return (
            <DefaultLayout>
            <div className="friendsoverviewcontainer">
                <h1>Our community ({this.state.friends.length} registered users)</h1>
                <form className="friends">               
                    <div className="titlepart">
                        <label className="friendlabel" htmlFor="friend">Search for Users :</label><br></br>
                        <input className="friendform" type="text" name="friend" value={this.state.friend} placeholder="Type a username here!" onChange={this.searchFriends}></input>
                    </div>
                </form>

                <div className="sortbuttons">
                    <button className="sortbuttonfriends" onClick={(e) => this.sortFriendsAZ()}>Sort by name (A-Z)</button>
                    <button className="sortbuttonfriends" onClick={(e) => this.sortFriendsZA()}>Sort by name (Z-A)</button>
                    <button className="sortbuttonfriends" onClick={(e) => this.sortLengthHL()}>Sort by length (High-Low)</button>
                    <button className="sortbuttonfriends" onClick={(e) => this.sortLengthLH()}>Sort by length (Low-High)</button>
                    <button className="sortbuttonfriends" onClick={(e) => this.randomSorter()}>Random sorter - mix it up!</button>
                </div>

                <div className="friendsboxes" >
                    {
                        this.state.searchFriends.map(friend =>
                            <div key={friend._id}>
                                <Frienddetail 
                                    key={friend._id}
                                    id={friend._id}
                                    username={friend.username}
                                    location={friend.location}
                                    innerCircle={this.addToInnerCircle}
                                    peopleFollow={this.addPeopleFollow}
                                />
                            </div>
                        )   
                    }
                </div>
            </div> 

            {/* <div className="peopleyoufollowcontainer">
                <h1>People you follow ({this.state.friends.length} following)</h1>
                <div className="peopleyoufollowboxes" >
                    {
                        this.state.searchFriends.map(friend =>
                            <div key={friend._id}>
                                <PeopleYouFollow 
                                    key={friend._id}
                                    id={friend._id}
                                    username={friend.username}
                                    removePeopleFollow={this.RemovePeopleYouFollow}
                                />
                            </div>
                        )   
                    }
                </div>
            </div> */}


            <div className="innercirclecontainer">
                <h1>Your inner circle selection ({this.state.innerCircle.length})</h1>

                <div className="innercircleboxes">
                    {
                        this.state.friends.filter(friend => (this.state.innerCircle).includes(friend._id)).length > 0 ? 
                            this.state.friends.filter(friend => (this.state.innerCircle).includes(friend._id)).map(inner =>
                            <div key={inner._id}>
                                <InnerCircleDetail 
                                    key={inner._id}
                                    id={inner._id}
                                    username={inner.username}
                                    deleteCircle={this.deleteFromInnerCircle}
                                />
                            </div>
                            )
                            :
                            <p>No inner circle friends available at the moment</p>        
                    }
                </div>
            </div>

            {/* <div className="yourfollowerscontainer">
                <h1>Your followers</h1>
                <div className="friendsboxes" >
                    {
                        this.state.searchFriends.map(friend =>
                            <div key={friend._id}>
                                <Frienddetail 
                                    key={friend._id}
                                    id={friend._id}
                                    username={friend.username}
                                    location={friend.location}
                                />
                            </div>
                        )   
                    }
                </div>
            </div> */}
            </DefaultLayout>
        )
    }
}

export default Friendsfollowers