import React, {Component} from 'react';
import * as R from 'ramda';

import './App.css';

import New from './New/New';
import {createElementURL, fetchURLs, resultsToJSON} from './utils/http.util';

class App extends Component {
  constructor() {
    super();
    this.state = {stories: []};
  }

  async componentDidMount() {
    const takeTen = R.take(20);

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(a => a.json())
      .then(takeTen)
      .then(R.map(createElementURL))
      .then(fetchURLs)
      .then(resultsToJSON)
      .then(stories => this.setState({stories}));

    //this.setState({stories});
  }

  render() {
    const {stories} = this.state;
    return (
      <div className="wrapper">
        {stories.map(story => (
          <New />
        ))}
      </div>
    );
  }
}

export default App;
