import React from 'react';


class GoogleAuth extends React.Component {
    state = { isSignedIn: null,
                profileUrl: null}
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '422805623031-9bh2qj3oj5k8qb2k4jvfac5pen06s308.apps.googleusercontent.com',
                scope: 'email profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if(this.auth.isSignedIn.get()) {
            this.setState({ profileUrl: this.auth.currentUser.get().getBasicProfile().getImageUrl() });
        } else {
            this.setState({ profileUrl: null })
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        if (this.state.isSingedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
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
        { this.state.profileUrl && <img alt =" profile image12" className="ui circular  tiny image centered bordered" src={this.state.profileUrl}/>   }
        <div>{this.renderAuthButton()}</div>
        </div>;

    }
}
 export default GoogleAuth;