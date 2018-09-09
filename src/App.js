import React, {Component} from 'react';
import * as R from 'ramda';

import './App.css';

import New from './New/New';
import {createElementURL, fetchURLs, resultsToJSON} from './utils/http.util';
import {toggleStories} from './utils/active-stories.util';

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
    const activeStories = toggleStories(this.state.activeStories, [story]);

    this.setState({activeStories});
  }

  isActiveStory(story) {
    return isActiveStory(this.state.activeStories, story);
  }

  render() {
    const {stories} = this.state;
    return (
      <div className="wrapper">
        {stories.map(story => (
          <New
            story={story}
            key={story.id}
            isActive={this.isActiveStory(story)}
            onClick={this.toggleStory.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default App;
