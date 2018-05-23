import React, { Component } from 'react';
import Curriculum from './Curriculum';

import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      curriculumID: 999,
    };
  }

  render() {
    const curriculum = (
      <Curriculum
        key={this.state.curriculumID}
        curriculumID={this.state.curriculumID}
      />
    );

    return (
      <div className="App">
        <div className="appContainer">
          {curriculum}
        </div>

      </div>
    );
  }
}

export default App;
