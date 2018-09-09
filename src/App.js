import React, {Component} from 'react';
import * as R from 'ramda';

import './App.css';

import New from './New/New';
import {createElementURL, fetchURLs, resultsToJSON} from './utils/http.util';

class App extends Component {
  constructor() {
    super();
    this.state = {stories: [], activeStories: []};
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
  }

  toggleStory(story) {
    console.log('story', story);
  }

  render() {
    const {stories} = this.state;
    return (
      <div className="wrapper">
        {stories.map(story => (
          <New
            story={story}
            key={story.id}
            onClick={this.toggleStory.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default App;
