import React from 'react'
import './Todo.css'  
import Todoitem from '../components/Todoitem'
import axios from 'axios'
import qs from "qs"
import DefaultLayout from "../layout/Default"

class Todo extends React.Component {
    constructor() {
        super()

        this.state = {
            title:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_BASE}/todo`,
            data: qs.stringify(this.state),
            headers: {"content-type": "application/x-www-form-urlencoded"},
            withCredentials: true
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    render() {
        return (
            <div>
                <DefaultLayout>
                <h1>To-do things for this app</h1>
                <h2 className="todotitle">Add your to-do here, Charles!</h2>
                <form className="todocontainer"> 
                    <div className="inputbuttonandfield">    
                        <div className="inputcontainer">
                            <div className="captionpart" onSubmit={this.handleSubmit}>
                                <label className="captionlabel" htmlFor="title">Add to-do:</label><br></br>
                                <input className="captionform" type="text" name="title" value={this.state.title} placeholder="Type your to-do here!" onChange={(e) => this.handleChange(e)}></input>
                            </div>
                        </div>
                    
                        <button className="shootbutton">Add!</button>
                    </div>
                </form> 
                <div>
                    <Todoitem/>
                    <Todoitem/>
                    <Todoitem/>
                    <Todoitem/>
                    <Todoitem/>
                </div>
                </DefaultLayout>
            </div>
        )
    }
}

export default Todo