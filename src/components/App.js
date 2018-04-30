import React, { Component } from 'react';
import '../styles/App.css';

import Subject from './Subject';

class App extends Component {
  constructor() {
    super();
    this.state = {
      subjectIDs: ['0', '1'],
    };
  }

  render() {
    const subjects = this.state.subjectIDs
      .map(elem => <Subject key= {elem} subjectID={elem} />);

    return (
      <div className="App">
        <div>{ subjects }</div>
      </div>
    );
  }
}

export default App;
