import React, { Component } from 'react';
import User from './UserRow';



class UserTableBody extends Component {

  shouldComponentUpdate(nextProps) {
  if (this.props.userName === nextProps.userName) {
    return false;
  }

  return true;
}
  render() {
    if (this.props.userName) {
      this.props.users.map(user => <User user={user} handleRemove={this.props.handleRemoveUser} />);
  }

    return (
      <div className='list-group row'>
        {this.props.users}
      </div>
    );
  }
}

export default UserTableBody;