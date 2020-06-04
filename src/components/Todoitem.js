import React from 'react'
import './Todoitem.css'

class Todoitem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="todoitemboxcontainer">
                <p className="todoitem">todoitem</p>
                <button className="todoedit">Edit</button>
                <button className="tododelete">Delete</button>
            </div>
        )
    }
}

export default Todoitem