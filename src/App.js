import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "text"
    };

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({text: "clikeeeeee"});
  }

  render() {
    const list = [1,2,3,4,5,6,7];
    const yo = list.map(function(number) {
      return <Title headline={number}/>;
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {yo}

        <Title headline="top title"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div>{this.state.text}</div>
          <input/>
          <button onClick={this.handler}>click me</button>
          <div>{this.state.text}</div>

        </div>
        <Title headline="bottom title"/>

      </div>
    );
  }
}

export default App;
