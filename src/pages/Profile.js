import React from 'react'
import DefaultLayout from "../layout/Default"
import "./Profile.css";

class Profile extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <DefaultLayout>
                <h1>Tell us something more about yourself!</h1>

                <form className="formcontainer" onSubmit={this.handleFormSubmit}>
                    <div className="userpart">
                        <label className="userlabel" for="username">Username:</label><br></br>
                        <input className="userform" type="text" name="username" value={this.state.username} placeholder="Please edit your username here!" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <div className="passwordpart">
                        <label className="passwordlabel" for="password">Password:</label><br></br>
                        <input className="passwordform" type="text" name="password" value={this.state.password} placeholder="Please edit your password here!" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <div className="locationpart">
                        <label className="locationlabel" for="location">Location:</label><br></br>
                        <input className="locationform" type="text" name="location" value={this.state.location} placeholder="Where do you live?" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <div className="filepart">
                        <label className="filelabel" for="file">Set a profile picture!</label><br></br>
                        <input className="fileform" type="file" name="file" value={this.state.file} onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <button className="editbutton">Edit your personal settings!</button>
                </form>

            </DefaultLayout>
        )
    }
}

export default Profile