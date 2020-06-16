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
                <p className="todoitem">{this.props.title}</p>
            </div>
        )
    }
}

export default Todoitem