import React from 'react'
import DefaultLayout from "../layout/Default"
import "./Profile.css";
import axios from "axios"

class Profile extends React.Component {
    constructor() {
        super()

        this.state = {
          username:"",
        //   password:"",
          location:"",
          file:"",
          error:""
        }

        // this.formRef = React.createRef()
        this.handleChange=this.handleChange.bind(this)
        this.handleFormSubmit=this.handleFormSubmit.bind(this)
    }

    handleChange(event){
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]:value
        })
    }

    handleFormSubmit(event){
        event.preventDefault()
        var formData = new FormData(this.formRef.current)
        axios({
            url: `${process.env.REACT_APP_API_BASE}profile`,
            data: formData,
            headers: {"content-type":"multipart/form-data"},
            method: "POST" 
        })
        .then((response)=> {
            console.log(response.data)
            this.props.history.push("/allchallenges")
        })
        .catch((error)=> {
            this.setState({
                error:error.response.message
            })
        })
    }

    render() {
        return (
            <DefaultLayout>
                <h1>Tell us something more about yourself!</h1>

                <div className="settingscontainer">
                    <img className="imagedaredevilspic" src="/images/profileimage.png" alt="picturesetting" /> 

                    {/* <p>{this.state.username}</p>
                    <p>{this.state.location}</p> */}
                </div>    

                <form className="formcontainerprofile" onSubmit={this.handleFormSubmit}>
                    <div className="userpart">
                        <label className="userlabel" htmlFor="username">Username:</label><br></br>
                        <input className="userform" type="text" name="username" value={this.state.username} placeholder="Please edit your username here!" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    {/* <div className="passwordpart">
                        <label className="passwordlabel" htmlFor="password">Password:</label><br></br>
                        <input className="passwordform" type="text" name="password" value={this.state.password} placeholder="Please edit your password here!" onChange={(e) => this.handleChange(e)}></input>
                    </div> */}

                    <div className="locationpart">
                        <label className="locationlabel" htmlFor="location">Location:</label><br></br>
                        <input className="locationform" type="text" name="location" value={this.state.location} placeholder="Where do you live?" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <div className="filepart">
                        <label className="filelabel" htmlFor="file">Set a profile picture!</label><br></br>
                        <input className="fileform" type="file" name="file" value={this.state.file} onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <button className="editbutton">Edit your personal settings!</button>
                </form>
            </DefaultLayout>
        )
    }
}

export default Profile