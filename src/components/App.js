import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';
import MapContainer from './MapContainer';

class App extends Component {
  
  render() {
    return (
     
      <div  className="ui fluid container very white inverted center aligned " style={{minHeight: "100vh", color:"white", minWidth:"100vw", background: "linear-gradient(151deg, rgba(167,0,138,0.91) 0%, rgba(105,0,143,0.89) 100%)"}}>
          <GoogleAuth/>
          { this.props.isSignedIn && <MapContainer/>}

      </div>
      
    );
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, imageUrl: state.auth.imageUrl, profileName: state.auth.profileName }
}
export default connect(mapStateToProps, { } )(App);
