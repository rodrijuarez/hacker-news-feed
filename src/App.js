import React, {Component} from 'react';
import './App.css';

import New from './New/New'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <New></New>
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
