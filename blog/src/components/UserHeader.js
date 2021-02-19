// importing the dependencies
import React from 'react';
import { connect } from 'react-redux';

// class based component
class UserHeader extends React.Component {
  // refactoring
  // if the users exists save them in props of the object
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// helps us for the refactor that we access the userId
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

// exporting with the connect function with mapping the state and the User Header component
export default connect(mapStateToProps)(UserHeader);
