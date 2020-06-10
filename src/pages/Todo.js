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
            title:"",
            todos:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_BASE}/todo`,
            withCredentials: true
        })
        .then(response => {
            console.log(response)
            let todolist = response.data;
            this.setState({todos:todolist})
        })
        .catch(error => {
            console.log("You've made an error when getting the todos charles: ",error)
        })
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
            data: qs.stringify(this.state.title),
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

    handleDelete(todoId){
        axios
        .delete(`${process.env.REACT_APP_API_BASE}/todo/${todoId}`)
        .then(response => {
            const remainingTodos = this.state.todos.filter(element => element._id !== todoId)
            this.setState({
                todos: remainingTodos
            })
        })
        .catch(err => console.log(err))
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

                {
                    this.state.todos.map((element,i) => (
                     <div className="todosoverviewlister">
                        <Todoitem key={i}/>

                        {/* <button className="todoedit">Edit</button> */}
                        <button className="tododelete" onClick={()=> this.handleDelete(element._id)}>Delete</button>
                     </div>
                    ))
                }
                
                </div>
                </DefaultLayout>
            </div>
        )
    }
}

export default Todo