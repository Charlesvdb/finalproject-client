import React from 'react'
import DefaultLayout from "../layout/Default"
import './About.css'


class About extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>About this app</h1>

                <div className="containerabout">
                    <section className="aboutcreator">
                        <h2>About the creator</h2>
                        <img className="leftbox" src="/images/charles.jpg" style={{width:230}} alt="picturecharles"/>
                        <ul className="rightbox">
                            <li>26-year old, Belgian national</li>
                            <li>Full-stack JavaScript developer (MERN stack)</li>
                            <li>Background in M&A investment banking</li>
                            <li>Fluent in Dutch, French and English</li>
                            <li>Interests: Football, Cycling, Tennis, Venture Capital</li>
                        </ul>
                    </section>
                    
                    <section className="locationmap">
                        <h2>Ironhack Amsterdam campus</h2>
                    </section>
                </div>

            </DefaultLayout>
        )
    }
}

export default About