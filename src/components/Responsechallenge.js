import React from 'react'
import './Responsechallenge.css'

class Responsechallenge extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
                <div className="responsesectionbox">
                    <h2>Name Daredevil</h2>
                    <img className="imagedaredevil" src="/images/CVDB.png" alt="" ></img>
                    <h3>"Picture caption #streetcredit"</h3>
                </div>
               )
    }
}

export default Responsechallenge