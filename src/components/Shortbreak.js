import React, { Component } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"; 
import Timer from 'react-compound-timer'
import Navbar from './Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



let alarm = new Audio("./alarm.mp3")


class Shortbreak extends Component {

  state = {
    podcasts: [],
    jokes: [],
    name: "",
    image: "",
    title_original:"",
    audio:"",
 
  }


  playAlarm = () => {
    alarm.play();
    }


 componentDidMount(){

  // doing a get request based on the catergory that was entered in Home component
  console.log("we are mounting, yeeha!")
  console.log(this.props)
  this.newGetRequestForPodcast()

    //this gets an initial joke
    this.getAJoke() //equivalent to clicking the button

  } 

  newGetRequestForPodcast = () => {
    if(this.props.categorychosen !== 'undefined') {
      
      axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${this.props.categorychosen}&sort_by_date=0&type=episode&len_min=4&len_max=6&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
      // console.log(res)
        this.setState({
          podcasts:res.data.results,
          image: "",
          title_original:"",
          audio:""
        }) 
      })
    }
  }





  getAJoke = () => {

    ///HERE IS THE JOKES API GET REQUEST///

    axios.get(`https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single`).then(res => { //This takes some time by the time it gets back 
    console.log(res)
            this.setState({
            jokes:res.data.joke
                }) 
            })
}


  // 1. use math.random to pick a random podcast???


  

  showThePodcasts = (parameter) => { 
    // console.log(this.state)
    // console.log('showThePodcasts kind of works')
    return parameter.map(eachPodcast => {
      // console.log(eachPodcast)
      return (

    <span>




        <Card className="makeItWork" bg="dark" text="white" border="warning">
        <Card.Img variant="top" src={eachPodcast.image} alt={eachPodcast.title_original} />
        <Card.Body>
            <Card.Title id="cardTitle">{eachPodcast.title_original}</Card.Title>
            <Card.Text>
            <audio className="audioStyle" controls>
                    <source src={eachPodcast.audio} type="audio/mpeg" />
            </audio>
            </Card.Text>
        
        </Card.Body>
        </Card>





    </span>
      )
    })
  }


//   handlePersonTyping = (e) => {
    
//     this.setState({
        
        
//         [e.target.name]:e.target.value,
    
    
//     }) 

    
// }





      submitting = (e) => {
        e.preventDefault()
        // this.setState({}
        //   name:e.target.value
          
      
      
        // }) 
      // console.log(this.state.name)
      // console.log('submit button is being pressed for long break')
      
      
      
        // let category = this.state.name;
      
        if(this.state.name !== "") {
      
        axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${this.props.category}&sort_by_date=0&type=episode&len_min=4&len_max=6&only_in=title%2Cdescription&language=English`,{headers: {'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732'}}).then(res => { //This takes some time by the time it gets back 
        // console.log(res)
          this.setState({
            podcasts:res.data.results,
            image: "",
            title_original:"",
            audio:""
          }) 
        })
      }
    
    }


// RENDERS BELOW

  render() {
  console.log(this.props)
    return (
      <div id="longBreakBackground">
      <Navbar/>


     {/* BELOW IS MY Timer */}



<Container>
<Row>
<Col>
<div className="breakTimerContainer">
<Timer
        initialTime={360000}
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
            // {
            //     time: 0,
            //     callback: () =>this.props.changeRenderPomodoroAmount(this.props.pomodoro),
            // },
            // {
            //     time: 0,
            //     callback: () =>console.log(`You have done ${this.props.pomodoro} pomodoros`),
            // }
        ]}
    >
    {({ start, resume, pause, stop, reset }) => (
        <React.Fragment>
            <div>
                {/* <Timer.Days /> days
                <Timer.Hours /> hours */}
                <Timer.Minutes /><span className="break_smallerWords"> minutes</span>
                <Timer.Seconds /><span className="break_smallerWords">  seconds</span>
                {/* <Timer.Milliseconds /> milliseconds */}
            </div>
            {/* <div>{timerState}</div> */}
            <br />
            <div>
                <button className="breakTimerStylesButton" onClick={start}>Start</button>
                <button className="breakTimerStylesButton" onClick={pause}>Pause</button>
                <button className="breakTimerStylesButton" onClick={resume}>Resume</button>
                <button className="breakTimerStylesButton" onClick={stop}>Stop</button>
                <button className="breakTimerStylesButton" onClick={reset}>Reset</button>
            </div>
            <div>
            <Link  to="/maintimer"><button className="breakContainerButtons" >Get Back To Work</button></Link>
            </div>
        </React.Fragment>
    )}
</Timer>

</div>
</Col>
<Col>
 {/* HERE IS THE JOKE BUTTON BELOW */}

<div className="jokeContainer">
    <p>{this.state.jokes}</p>
    <button className="breakContainerButtons" onClick={this.getAJoke}>Click here to LOL</button>
</div>
</Col>
</Row>
</Container>

{/* THIS SHOWS THE podcasts BELOW*/}

    <div className="flexin">
        {this.showThePodcasts(this.state.podcasts)}
    </div>


   


      </div>
    );
  }
}




export default Shortbreak;