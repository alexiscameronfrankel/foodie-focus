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
            <div>
                <div className="home_container">
                <img src="./tomatoman.png" alt="Logo" style={{ width: '10%'}}/>
                <Card className="home_container " border="danger" style={{ width: '50%'}}>
                    <Card.Body>
                    <Typist>
                        Hello! I am a little tomato man and this a tomato timer!

                    
                    </Typist>
                        <form onSubmit={this.submitting} className="home-main">
                    {/* <label className="home-main_text">
                    </label> */}
                    {/* <div> */}
                        <input type="text" id="fname" name="name" onChange={this.handlePersonTyping} className="home-main_input"/>
                        
                        <Link to="/maintimer"><input type="submit" value="Submit" className="home-main_submit"/> </Link>
                        
                    {/* </div> */}
                </form>
                    </Card.Body>
                </Card>
              
                </div>
            </div>
        );
    }
}

export default Home;