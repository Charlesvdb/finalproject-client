import React from "react"
import './Challengebox.css';
// import {Link} from "react-router-dom"

class Challengebox extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="challengebox"> 
                <img className="challengerpic" src="/images/charles.jpg" alt=""></img>
                
                <section className="boxchallenge">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </section>

                <div className="responsecounter">
                    <p className="responsenumber">0</p>
                    <p className="responsetext">Daredevils</p>
                </div>
            </div>   
        )
    }
}

export default Challengebox