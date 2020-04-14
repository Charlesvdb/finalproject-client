import React from 'react'
import DefaultLayout from "../layout/Default"
import './Friends.css'

class Friendsfollowers extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <DefaultLayout>
                <h1>Friends</h1>

                <form className="friends" onSubmit={this.handleFormSubmit}>
                    
                    <div className="titlepart">
                        <label className="friendlabel" for="friend">Searching a friend:</label><br></br>
                        <input className="friendform" type="text" name="friend" value={this.state.friend} placeholder="Type a friend's username here!" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <button className="searchfriendbutton">Search for a matching friend!</button>
                </form>

                

            </DefaultLayout>
        )
    }
}

export default Friendsfollowers