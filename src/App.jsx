import React, { Component } from 'react';
import './App.css'
class App extends Component {
  // Initial state with person details
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Omofoma Ivie",
        bio: "Am a passionate software developer",
        imgSrc: "/images/ivie.jpeg",
        profession: "Developer",
      },
      show: true,
    };
    // Initialize mountTime
    this.mountTime = null; 
  }
// Record the mount time
  componentDidMount() {
    this.mountTime = new Date(); 
    this.timer = setInterval(() => {
// Trigger a re-render to update the time
      this.forceUpdate();
// Update every 1 second (1000 milliseconds)
    }, 1000); 
  }
  componentWillUnmount() {
    // Clean up the timer when the component unmounts
    clearInterval(this.timer); 
  }
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
// Calculates component mount time precisely
  getTimeSinceMount() {
    const now = new Date();
    const mountTime = this.mountTime || now;
    const diff = now - mountTime;
    const seconds = Math.floor(diff / 1000);
    return `${seconds} seconds`;
  }
  // State destructuring for person display.
  render() {
    const { person, show } = this.state;
    return (
      //the div container
      <div className='states' style={{marginLeft:'630px'}}>
        <h1>Profile</h1>
        {show && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} style={{height: '300px', borderRadius: '40px'}}/>
            {/* <img src={person.imgSrc} alt={person.fullName} style={{height: '400px', borderRadius: '40px', marginTop:'-50px'}}/> */}
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <button onClick={this.toggleShow} style={{height: '50px', width: '100px', borderRadius: '10px', border: 'none', backgroundColor:'darkblue', color:'#fff'}}>Toggle Profile</button>
        <p>Time since component mount: {this.getTimeSinceMount()}</p>
      </div>
    );
  }
}
export default App;
