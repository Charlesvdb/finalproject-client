import React from 'react'
import DefaultLayout from "../layout/Default"
import './Startchallenge.css'
import qs from "qs"
import axios from "axios"

class Startchallenge extends React.Component {
    constructor() {
        super()

        this.state = {
            title:"",
            description:""
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleFormSubmit=this.handleFormSubmit.bind(this)
    }

    handleChange(event) { 
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        axios({
            method: "POST",
            url: "http://localhost:3000/startchallenge",
            data: qs.stringify(this.state),
            headers: {"content-type": "application/x-www-form-urlencoded"},
            withCredentials: true
        })
        .then(() => {
            this.props.history.push("/allchallenges")
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    render() {
        return (
            <DefaultLayout>
                <div>
                <h1>Start a new challenge</h1>

                <form className="startchallenge" onSubmit={this.handleFormSubmit}>
                    <div className="titlepart">
                        <label className="titlelabel" htmlFor="title">Title of your challenge:</label><br></br>
                        <input className="titleform" type="text" name="title" value={this.state.title} placeholder="Please give your challenge a good title!" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <div className="descriptionpart">
                        <label className="descriptionlabel" htmlFor="description">Description of challenge:</label><br></br>
                        <input className="descriptionform" type="textarea" name="description" value={this.state.description} placeholder="Please add a description of your challenge here!" onChange={(e) => this.handleChange(e)}></input>
                    </div>

                    <button className="addchallengebutton">Add a new challenge!</button>
                </form>
                </div>

            </DefaultLayout>
        )
    }
}

export default Startchallenge