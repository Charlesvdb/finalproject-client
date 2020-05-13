import React from 'react'
import DefaultLayout from "../layout/Default"
import './Friends.css'
import Axios from 'axios'
import Frienddetail from '../components/Frienddetail'

class Friendsfollowers extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []       
        }
        
        this.searchFriends=this.searchFriends.bind(this)
    }

    componentDidMount(){
        Axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE}/friends`,
            withCredentials: true       
        })
        .then(response =>{
            console.log(response)
            let friendslist = response.data
            this.setState({
                friends:friendslist
            })
        })
        .catch(error =>{
            console.log("Charles made an error when retrieving all friends: ",error)
        })
    }

    searchFriends(e){ // eslint-disable-next-line
        let friendsearched = this.state.friends.filter(friend => {
            if(friend.username){
                if(friend.username.toLowerCase().includes(e.target.value.toLowerCase())){
                    return true
                }
            }
        })
        this.setState({
            friends:friendsearched
        })
    }

    render() {
        return (
            <DefaultLayout>
                <h1>Friends</h1>

                <form className="friends">               
                    <div className="titlepart">
                        <label className="friendlabel" htmlFor="friend">Searching a friend:</label><br></br>
                        <input className="friendform" type="text" name="friend" value={this.state.friend} placeholder="Type a friend's username here!" onChange={this.searchFriends}></input>
                    </div>
                </form>

                <div className="friendsboxes" >
                    {
                        this.state.friends.map(friend =>
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

            </DefaultLayout>
        )
    }
}

export default Friendsfollowers