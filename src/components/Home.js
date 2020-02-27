import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Typist from 'react-typist';


class Home extends Component {

    state = {
        name:""
    }

    handlePersonTyping = (e) => {
        
        this.setState({
            
            
            [e.target.name]:e.target.value,
        
        
        }) 
    
        
    }


    submitting = (e) => {
        e.preventDefault()
      
        let category = this.state.name;

        this.props.handlePersonInputting(category)
    
      
      }





    render() {
        return (
            <div className="apply_viewport_height">
                <div className="home_container apply_viewport_height">
                <img src="./tomatoman.png" alt="Logo" className="tomato_man" style={{ width: '10%'}}/>
                <Card className="home_container " border="danger">
                    <Card.Body style={{width: '450px'}}>
                    <Typist>
                    Hello! I am a little tomato man and this is a pomodoro timer. 
                    <br/>
                    <br/>
                    We'll work in 25 minute intervals (pomodoros) with 3 short breaks. After your fourth pomodoro, take a long break (you deserve it). Then back to work it is!
                    <br/>
                    <br/>
                    Each pomodoro session will get easier~
                    <br/>
                    <br/>
                    I've set up some podcasts and jokes for you during your break periods. Choose a podcast genre (ex: meditation, nutrition, dogs) to get started!
                    
                    </Typist>
                        <form onSubmit={this.submitting} >
                    {/* <label className="home-main_text">
                    </label> */}
                    <div>
                        <br/>
                        <br/>
                        <input type="text" id="fname" name="name" onChange={this.handlePersonTyping} className="home-main_input" placeholder="Enter category here" style={{width:'80%'}}/>
                        
                        <Link to="/maintimer"><input type="submit" value="Submit" className="submit_button"/> </Link>
                        
                    </div>
                </form>
                    </Card.Body>
                </Card>
              
                </div>
            </div>
        );
    }
}

export default Home;