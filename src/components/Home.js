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
                <img src="./tomatoman.png" alt="Logo" style={{ width: '10%'}}/>
                <Card className="home_container " border="danger" style={{ height: '40%'}}>
                    <Card.Body style={{width: '275.5px'}}>
                    <Typist>
                    TEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXT
                    <br/>
                    <br/>
                    <Typist.Delay ms={500} />
                    BLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCKTEXTBLOCK

                    
                    </Typist>
                        <form onSubmit={this.submitting} className="home-main">
                    {/* <label className="home-main_text">
                    </label> */}
                    <div>
                        <input type="text" id="fname" name="name" onChange={this.handlePersonTyping} className="home-main_input"/>
                        
                        <Link to="/maintimer"><input type="submit" value="Submit" className="home-main_submit"/> </Link>
                        
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