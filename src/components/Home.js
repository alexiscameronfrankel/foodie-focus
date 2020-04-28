import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Typist from 'react-typist';


class Home extends Component {

    state = {
        name:"",
        intialTime: this.props.initialTime
    }

    handlePersonTyping = (e) => {
        console.log('handlePersonTyping is being called')
        this.setState({
            
            
            [e.target.name]:e.target.value,
        
        
        }) 
    
        
    }


    submitting = (e) => {
        e.preventDefault()
      
        console.log('home.js submit')
        let category = this.state.name;
        let initialTime = this.state.initialTime;

        this.props.handlePersonInputting(category)
        this.props.handlePersonInputtingWorkTime(initialTime)

        this.props.history.push("/maintimer")

    
      
      }



    render() {
        return (
            <div className="apply_viewport_height homeBackground">
                <div className="home_container apply_viewport_height">
                <img src="./tomatoman.png" alt="Logo" className="tomato_man" />
                <Card className="home_container ">
                    <Card.Body className="card-body">
                    <Typist className="Typist">
                    Hello! I am a little tomato man and this is a pomodoro timer. 
                    <br/>
                    <br/>
                    We'll work in intervals (pomodoros) with <strong>3 short breaks</strong>. Customize your work timer in the input below. After your <strong>fourth</strong> pomodoro, take a <strong>long break</strong> (you deserve it). Repeat as necessary!
                    {/* <br/>
                    <br/>
                    Each pomodoro session will get easier~
                    <br/>
                    <br/> */}
                    I've set up some podcasts and jokes for you during your break periods. <strong>Choose a podcast genre (ex: meditation, nutrition, dogs) to get started!</strong>
                    
                    </Typist>
                    <div className="form-style"> 
                        <form onSubmit={this.submitting}>
                    {/* <label className="home-main_text">
                    </label> */}
                    
                        <input type="text" id="fname" name="name" onChange={this.handlePersonTyping} className="home-main_input" placeholder="Enter podcast category here"/>
                        <input type="number" id="fname" name="initialTime" onChange={this.handlePersonTyping} className="home-main_input" placeholder="Enter work time in minutes"/>
                        {/* <Link to="/maintimer"><input type="submit" value="Submit" className="submit_button"/> </Link> */}
                        <input type="submit" value="Submit" className="submit_button"/>
                        
                                 </form>
                        </div>
                    </Card.Body>
                </Card>
              
                </div>
            </div>
        );
    }
}

export default Home;