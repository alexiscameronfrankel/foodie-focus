import React, { Component } from 'react';

import axios from "axios";
import './App.css';
import './components/Home';
import Shortbreak from './components/Shortbreak';
import Longbreak from './components/Longbreak';
import Pomodorocountdown from './components/Pomodorocountdown'
import {Switch, Route} from "react-router-dom";
import Home from './components/Home'



class App extends Component {

  state = {
    podcasts: [],
    name: "",
    image: "",
    title_original:"",
    audio:"",
    pomodoro: 0

  }



changeRenderPomodoroAmount = () => {
  let incrementedPomodoro = this.state.pomodoro + 1
  this.setState({
          
          
      pomodoro: incrementedPomodoro
  
  
  })
}


  handlePersonInputting = (input) => {

    console.log("app.js save input to state")
    
    this.setState({
        
        
        category: input
    
    
    }) 



    
}


  render() {
  
    return (
      <div>

      <Switch>
          <Route exact path="/" render={props => <Home {...props} handlePersonInputting={this.handlePersonInputting}/>}/> {/* says if url is homepage (/) then just show the home */}
          <Route exact path="/maintimer" render={props => <Pomodorocountdown {...props} pomodoro ={this.state.pomodoro} changeRenderPomodoroAmount={this.changeRenderPomodoroAmount} allpodcasts={this.state.podcasts} alljokes={this.state.jokes}/>}/>
          <Route exact path="/longbreak" render={props => <Longbreak {...props} categorychosen={this.state.category} allpodcasts={this.state.podcasts} alljokes={this.state.jokes} />}/>
          <Route exact path="/shortbreak" render={props => <Shortbreak  {...props} categorychosen={this.state.category} allpodcasts={this.state.podcasts} alljokes={this.state.jokes} />}/>
      </Switch>

      
      </div>
    );
  }
}



export default App;