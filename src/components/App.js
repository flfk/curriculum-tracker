import React, { Component } from 'react';
import Topic from './Topic';

import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      subjectIDs: ['0', '1', '2'],
    };
  }

  render() {
    return (
      <div className="App">
        <Topic key="0" topicName="1. Introduction to CS" subjectIDs={ this.state.subjectIDs } />
      </div>
    );
  }
}

export default App;
