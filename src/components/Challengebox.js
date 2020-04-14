import React from "react"
import './Challengebox.css';

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
                    <h3>This is where the title fits</h3>
                    <p>This is where the description fits</p>
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