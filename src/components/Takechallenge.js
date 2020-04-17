import React from 'react'
import './Takechallenge.css'
import axios from 'axios'

class Takechallenge extends React.Component {
    constructor() {
        super()

        this.state = {
            caption:"",
            file:"",
            error:""
        }
        this.formRef = React.createRef()
        this.handleChange=this.handleChange.bind(this)
        this.handleFormSubmit=this.handleFormSubmit.bind(this)
    }

    handleChange(event){
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]:value
        })
    }

    handleFormSubmit(event){
        debugger
        event.preventDefault()
        var formData = new FormData(this.formRef.current)
        axios({
            url: `${process.env.REACT_APP_API}/takechallenge`,
            data: formData,
            headers: {
                "content-type":"multipart/form-data"
            },
            method: "POST" 
        })
        .then((response)=> {
            debugger
            this.props.history.push(`/challengedetail/${response.data._id}`)
        })
        .catch((error)=> {
            this.setState({
                error:error.response.message
            })
        })
    }

    render() {
        return (
            <div className="takechallenge">

                <form className="formcontainer" onSubmit={this.handleFormSubmit} ref={this.formRef}>
                    <div>
                        <h2 className="titletakechallengebow">Take the challenge! Show us what you got!</h2>
                    </div>   

                    <div className="inputcontainer">
                        <div className="captionpart">
                            <label className="captionlabel" htmlFor="caption">Caption:</label><br></br>
                            <input className="captionform" type="text" name="caption" value={this.state.caption} placeholder="Type your picture caption here!" onChange={(e) => this.handleChange(e)}></input>
                        </div>

                        <div className="filepart">
                            <label className="filelabel" htmlFor="file">Show us your best picture response!</label><br></br>
                            <input className="fileform" type="file" name="file" value={this.state.file} onChange={(e) => this.handleChange(e)}></input>
                        </div>
                    </div>

                    <button className="shootbutton">Shoot!</button>
                </form>
            </div>
        )
    }
}

export default Takechallenge