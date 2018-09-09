import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box d-flex">
          <div>
            <p class="text-small">Hello</p>
          </div>
          <div>
            <p class="text-small">Bye</p>
          </div>
        </div>
        <div className="box box2">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box box2">7</div>
        <div className="box">8</div>
        <div className="box">9</div>
        <div className="box">10</div>
        <div className="box">11</div>
        <div className="box">12</div>
      </div>
    );
  }
}

export default App;
