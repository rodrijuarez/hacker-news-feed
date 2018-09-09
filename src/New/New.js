import React, {Component} from 'react';
import './New.css';

class New extends Component {
  render() {
    return (
      <div className="new d-flex">
        <div className="d-flex flex-column ai-center px-1">
          <i className="arrow-up" />
          <p className="text-small mt-0">10</p>
        </div>
        <div>
          <p className="text-bold text-small my-0">
            My YC app: Dropbox - Throw away your USB drive
          </p>
          <p className="text-light text-small mt-0">By dhouston</p>
          <p className="text-small">
            Aw shuck, guys you make me blush with your compliments
          </p>
        </div>
      </div>
    );
  }
}

export default New;
