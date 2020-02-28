import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav> 
                <Link to="/"><img src="tomatoface.png" id="navImg" alt="tomato face man"/></Link>
                </nav>
                
            </div>
        );
    }
}

export default Navbar;