import React, { Component } from 'react';
import Timer from 'react-compound-timer'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar';


let alarm = new Audio("./alarm.mp3")

class Pomodorocountdown extends Component {

    state = {
        pomodoro: 0,
       
    }

    playAlarm = () => {
    alarm.play();
    }

changeRenderPomodoroAmount = () => {
    let incrementedPomodoro = this.state.pomodoro + 1
    this.setState({
            
            
        pomodoro: incrementedPomodoro,
    
    
    })
}

addTime = (e) => {
console.log('i am adding time')
let addMinute = this.state.timerLength + 60000
console.log(this.state.timerLength)
    this.setState({
            
            
       timerLength: addMinute,
    
    
    })
}


// BELOW IS WHERE WE ARE RENDERING

    render() {
        return (
     <div className="apply_viewport_height  mainTimerBackground">

        <Navbar/>

    <section id="centerContainer">

        <div className = "mainTimerContainer">
        {/* BELOW IS MY Timer */}

        <Timer
            className="mainTimerStyles"
            initialTime={this.props.initialTime}
            direction="backward"
            startImmediately={false}
            timeToUpdate={100}
            checkpoints={[
                {
                    time: 0,
                    callback: () => this.playAlarm(), 
                },
                {
                    time: 0,
                    callback: () => console.log('alarm is sounding'), 
                },
                {
                    time: 0,
                    callback: () =>this.props.changeRenderPomodoroAmount(this.props.pomodoro),
                },
                {
                    time: 0,
                    callback: () =>console.log(`You have done ${this.props.pomodoro} pomodoros`),
                }
            ]}
        >
        {({ start, resume, pause, stop, reset }) => (
            <React.Fragment>
                <div>
                    {/* <Timer.Days /> days
                    <Timer.Hours /> hours */}
                    <span className="mainTimer"> <Timer.Minutes /><span className="mainTimer_smallerWords"> minutes</span>
                    <Timer.Seconds /><span className="mainTimer_smallerWords">seconds</span></span>
                    {/* <Timer.Milliseconds /> milliseconds */}
                </div>
                {/* <div>{timerState}</div> */}
                <br />
                <div>
                    <button className="mainTimerStylesButton" onClick={start}>Start</button>
                    <button className="mainTimerStylesButton"  onClick={pause}>Pause</button>
                    <button className="mainTimerStylesButton"  onClick={resume}>Resume</button>
                    <button className="mainTimerStylesButton"  onClick={stop}>Stop</button>
                    <button className="mainTimerStylesButton"  onClick={reset}>Reset</button>
                    
                </div>
            </React.Fragment>
        )}
    </Timer>


 {/* working on making this work ---> <button className="mainTimerStylesButton"  onClick={this.addTime}>+</button> */}

 {/* HERE IS WHERE I DISPLAY THE POMODOROS */}


<p className="pomodoroDisplayStyles">You have done {this.props.pomodoro} pomodoros</p>





{/* HERE ARE MY BREAK BUTTONS */}
<div>

<Link to="/longbreak"><Button variant="outline-danger" className="iMakeButtonSmaller">Long Break</Button></Link>
<Link to="/shortbreak"><Button variant="outline-danger" className="iMakeButtonSmaller">Short Break</Button></Link>

</div>     
           
            </div>       

    </section>  
                
</div>
        );
    }
}

export default Pomodorocountdown;