import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      subjectName: 'Harvard cs50',
    };
  }

  render() {
    return (
      <div className="App">
        <p>hello world</p>
        { this.state.subjectName }
      </div>
    );
  }
}

export default App;
