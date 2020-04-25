import React, { Component } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Timer from 'react-compound-timer'
import Navbar from './Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


let alarm = new Audio("./alarm.mp3")

//document.querySelector("#longBreakBackground > div.container > div > div:nth-child(1) > div > div:nth-child(1)").innerHTML.split("").join("-")

//getting closer creating onClick function to customize time on the actual page above...if you don't remember what this is, past alexis, copy and paste into the console

//what i think my next step is using a method to replace old minute time with new minute timer before the first < in the array (if i were to take off the .join) then join...you had a function before that updated the state onClick of the intialTime, but couldn't get to render...probably have to do something like that + DOM manipulation


class Longbreak extends Component {
  state = {
    podcasts: [],
    jokes: [],
    name: "",
    image: "",
    title_original: "",
    audio: "",
    longBreakTime: 660000

  }


  playAlarm = () => {
    alarm.play();
  }


  componentDidMount() {

    // doing a get request based on the catergory that was entered in Home component
    console.log("we are mounting, yeeha!")
    console.log(this.props)
    this.newGetRequestForPodcast()

    //this gets an initial joke
    this.getAJoke() //equivalent to clicking the button

  }

  newGetRequestForPodcast = () => {
    if (this.props.categorychosen !== 'undefined') {

      axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${this.props.categorychosen}&sort_by_date=0&type=episode&len_min=9&len_max=11&only_in=title%2Cdescription&language=English`, { headers: { 'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732' } }).then(res => { //This takes some time by the time it gets back 
        // console.log(res)
        this.setState({
          podcasts: res.data.results,
          image: "",
          title_original: "",
          audio: ""
        })
      })
    }
  }



  getAJoke = () => {

    ///HERE IS THE JOKES API GET REQUEST///

    axios.get(`https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single`).then(res => { //This takes some time by the time it gets back 
      console.log(res)
      this.setState({
        jokes: res.data.joke
      })
    })
  }






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

  addTime = (e) => {
    // this.state.longBreakTime + 60000
    let newBreakTime = 4
    console.log('new break time is being added', newBreakTime)
    let longBreakSplit = document.querySelector("#longBreakBackground > div.container > div > div:nth-child(1) > div > div:nth-child(1)").innerHTML.split("")
    console.log(longBreakSplit)
    console.log(longBreakSplit.indexOf('<'))
    let spliceHowMany = longBreakSplit.indexOf('<')
    console.log(spliceHowMany)
    // let newTimeSplit = longBreakSplit.splice(0,2,2)
    // console.log(newTimeSplit, "knfsn")
    console.log(typeof longBreakSplit)
    longBreakSplit[0] = newBreakTime
    let longBreakJoin = longBreakSplit.join("")
    console.log(longBreakJoin)
    console.log(typeof newBreakTime)
    this.setState({
      longBreakTime: newBreakTime
    })
    document.querySelector("#longBreakBackground > div.container > div > div:nth-child(1) > div > div:nth-child(1)").innerHTML = longBreakJoin
  }

  submitting = (e) => {
    e.preventDefault()


    if (this.state.name !== "") {

      axios.get(`https://listen-api.listennotes.com/api/v2/search?q=${this.props.category}&sort_by_date=0&type=episode&len_min=9&len_max=11&only_in=title%2Cdescription&language=English`, { headers: { 'X-ListenAPI-Key': '4a61357b39b247419a27150332f26732' } }).then(res => { //This takes some time by the time it gets back 
        // console.log(res)
        this.setState({
          podcasts: res.data.results,
          image: "",
          title_original: "",
          audio: ""
        })
      })
    }

  }


  // RENDERS BELOW

  render() {
    console.log(this.props)
    return (
      <div id="longBreakBackground">
        <Navbar />


        {/* BELOW IS MY Timer */}



        <Container>
          <Row>
            <Col>
              <div className="breakTimerContainer">
                <Timer
                  initialTime={this.state.longBreakTime}
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
                        <Timer.Minutes /><span className="break_smallerWords">minutes</span>
                        <Timer.Seconds /><span className="break_smallerWords">seconds</span>
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
                        <Link to="/maintimer"><button className="breakContainerButtons" >Get Back To Work</button></Link>
                      </div>
                      {/*BELOW IS COMMENTED OUT CHANGE TIME BUTTON*/}
                      {/* <button className="breakContainerButtons" onClick={this.addTime}>Change Time</button> */}
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



export default Longbreak;

