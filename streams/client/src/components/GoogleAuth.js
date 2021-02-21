import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1055933299025-e8fh9ps994ko8q5v6lhur9fa2fbfctkn.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
    }
  }

  // gapi.auth2.getAuthInstance().signIn()
  // gapi.auth2.getAuthInstance().signOut()
  // gapi.auth2.getAuthInstance().isSignedIn.get()

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
