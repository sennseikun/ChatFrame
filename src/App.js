import React, { Component } from 'react';
import logo from './mylogo.png';
import './App.css';
import ChatFrame from './components/ChatFrame.js';
import IconRow from './components/IconRow.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body className="App-body">
          <ChatFrame/>
        </body>
        <footer className="App-footer">
          <IconRow/>
        </footer>
      </div>
    );
  }
}

export default App;
