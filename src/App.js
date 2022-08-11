import React from 'react';
import './App.css';
import axios from 'axios';



class App extends React.Component {
  state = { 
    advice: '' ,
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        
        this.setState({ advice });
        
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="app">
          <img src="https://images.pexels.com/photos/13041003/pexels-photo-13041003.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          <div className="card">
            <h1 className="heading">"{ advice }"</h1>
            <button 
            className="button" 
            onClick={this.fetchAdvice}>
              <span>GIVE ME ADVICE</span>
            </button>
          </div>
        </div>

      </>
    );
  }
}
export default App;