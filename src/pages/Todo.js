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
        this.sortAZ=this.sortAZ.bind(this)
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
        console.log(this.state.title)
    }

    handleSubmit(event){
        event.preventDefault()
        const newTodo = {title: this.state.title}
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_BASE}/todo`,
            data: qs.stringify(newTodo),
            headers: {"content-type": "application/x-www-form-urlencoded"},
            withCredentials: true
        })
        .then((response) => {
            console.log(response)
            this.setState(prevState => ({
                todos: [...prevState.todos,newTodo]
            }))
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

    sortAZ(){
        let aztodos = this.state.todos.sort((a,b) => {
            return a.title > b.title ? 1 : -1
        })
        this.setState({
            todos: aztodos
        })
    }

    sortZA(){
        let zatodos = this.state.todos.sort((a,b) => {
            return a.title > b.title ? -1 : 1
        })
        this.setState({
            todos: zatodos
        })
    }

    sortByLengthHL(){
        let lengthtodos = this.state.todos.sort((a,b) => {
            return a.title.length < b.title.length ? 1 : -1
        })
        console.log(lengthtodos)
        this.setState({
            todos: lengthtodos
        })
        console.log(lengthtodos)
    }

    sortByLengthLH(){
        let lengthtodos = this.state.todos.sort((a,b) => {
            return a.title.length > b.title.length ? 1 : -1
        })
        console.log(lengthtodos)
        this.setState({
            todos: lengthtodos
        })
        console.log(lengthtodos)
    }

    render() {
        return (
            <div>
                <DefaultLayout>
                <h1>To-do things for this app ({this.state.todos.length} outstanding to-do's)</h1>
                <h2 className="todotitle">Add your to-do here, Charles!</h2>
                <form className="todocontainer" onSubmit={this.handleSubmit}> 
                    <div className="inputbuttonandfield">    
                        <div className="inputcontainer">
                            <div className="captionpart">
                                <label className="captionlabel" htmlFor="title"></label><br></br>
                                <input className="captionform" type="text" name="title" value={this.state.title} placeholder="Type your to-do here!" onChange={(e) => this.handleChange(e)}></input>
                                <button className="shootbutton">Add!</button>
                            </div>
                        </div> 
                    </div>
                </form> 

                <div className="sortcontainertodos">
                    <div className="sortbutton" onClick={(e) => this.sortAZ()}>Sort A-Z</div>
                    <div className="sortbutton" onClick={(e) => this.sortZA()}>Sort Z-A</div>
                    <div className="sortbutton" onClick={(e) => this.sortByLengthHL()}>Sort by length High-Low</div>
                    <div className="sortbutton" onClick={(e) => this.sortByLengthLH()}>Sort by length Low-High</div>
                </div>

                {
                    this.state.todos.map(element=> (
                     <div className="todosoverviewlister" key={element._id}>
                        <Todoitem id={element._id} title={element.title} />

                        <button className="tododelete" onClick={()=> this.handleDelete(element._id)}>Delete</button>
                     </div>
                    ))
                }
                
                </DefaultLayout>
            </div>
        )
    }
}

export default Todo