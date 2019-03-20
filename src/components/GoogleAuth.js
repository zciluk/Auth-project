import React from 'react';
import { signIn, signOut } from '../actions';
import {connect } from 'react-redux';

class GoogleAuth extends React.Component {
   
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '422805623031-9bh2qj3oj5k8qb2k4jvfac5pen06s308.apps.googleusercontent.com',
                scope: 'email profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getBasicProfile().getImageUrl());
            //this.setState({ profileUrl: this.auth.currentUser.get().getBasicProfile().getImageUrl() });
        } else {
            this.props.signOut();
            
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        if (this.props.isSingedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon"/>
             Sign Out 
             </button>;
        } else {
            return <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon"/>
             Sign In with Google
             </button>;
        }
    }
    render() {
        return <div>
          { this.props.imageUrl && <img alt =" profile image12" style={{marginBottom: "2em"}} className="ui circular  tiny image centered bordered" src={this.props.imageUrl}/>   }
        <div>{this.renderAuthButton()}</div>
        </div>;

    }
}
  
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, imageUrl: state.auth.imageUrl }
}
 export default connect(mapStateToProps, { signIn, signOut} )(GoogleAuth);