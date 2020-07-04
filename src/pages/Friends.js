import React from 'react'
import DefaultLayout from "../layout/Default"
import './Friends.css'
import Axios from 'axios'
import Frienddetail from '../components/Frienddetail'
import InnerCircleDetail from '../components/InnerCircleDetail'
import { getUser } from '../utils/auth'

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

    render() {
        return (
            <DefaultLayout>
            <div className="friendsoverviewcontainer">
                <h1>Our community</h1>
                <form className="friends">               
                    <div className="titlepart">
                        <label className="friendlabel" htmlFor="friend">Search for Users :</label><br></br>
                        <input className="friendform" type="text" name="friend" value={this.state.friend} placeholder="Type a username here!" onChange={this.searchFriends}></input>
                    </div>
                </form>

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
                                />
                            </div>
                        )   
                    }
                </div>
            </div> 

            <div className="innercirclecontainer">
                <h1>Your inner circle selection</h1>

                <div className="innercircleboxes">
                    {
                        this.state.friends.filter(friend => (this.state.innerCircle).includes(friend._id)).length > 0 ? 
                            this.state.friends.filter(friend => (this.state.innerCircle).includes(friend._id)).map(inner =>
                            <div key={inner._id}>
                                <InnerCircleDetail 
                                    key={inner._id}
                                    id={inner._id}
                                    username={inner.username}
                                    location={inner.location}
                                />
                            </div>
                            )
                            :
                            <p>No inner circle friends available at the moment</p>        
                    }
                </div>
            </div>

            {/* <div className="peopleyoufollowcontainer">
                <h1>People you follow</h1>
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
            </div>

            <div className="yourfollowerscontainer">
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