import React, {Component} from 'react';
import './New.css';

import {buildTitle, buildSubtitle, buildScore} from '../utils/new-text.util';

class New extends Component {
  render() {
    const {story, onClick, isActive} = this.props;

    return (
      <div
        className={isActive ? 'new d-flex active' : 'new d-flex'}
        onClick={() => onClick(story)}>
        <div className="d-flex flex-column ai-center px-1">
          <i className="arrow-up" />
          <p className="text-small mt-0">{buildScore(story)}</p>
        </div>
        <div>
          <p className="text-bold text-normal my-0">{buildTitle(story)}</p>
          <p className="text-light text-small mt-1">{buildSubtitle(story)}</p>
        </div>
      </div>
    );
  }
}

export default New;
