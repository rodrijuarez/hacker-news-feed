import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="new d-flex">
          <div class="d-flex flex-column ai-center px-1">
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
        <div className="new">2</div>
        <div className="new">3</div>
        <div className="new">4</div>
        <div className="new">5</div>
        <div className="new">6</div>
        <div className="new">7</div>
        <div className="new">8</div>
        <div className="new active">9</div>
        <div className="new">10</div>
        <div className="new">11</div>
        <div className="new">12</div>
      </div>
    );
  }
}

export default App;
