import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';

class App extends Component {
  render() {
    return (
      <div className="ui segment very padded black inverted center aligned " style={{minHeight: "100vh", background: "linear-gradient(151deg, rgba(167,0,138,0.91) 0%, rgba(105,0,143,0.89) 100%)"}}>
          <GoogleAuth/>
      </div>
    );
  }
}

export default App;
