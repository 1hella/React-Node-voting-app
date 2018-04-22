import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { polls: [] }

  componentDidMount() {
    fetch('/api/polls')
      .then(res => res.json())
      .then(polls => this.setState({ polls }));
  }
  
  render() {
    return (
      <div className="App">
        <ul>
        {this.state.polls.map(poll => 
          <li key={poll.id}>{poll.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default App;
