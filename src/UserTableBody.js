import React, { Component } from 'react';
import User from './UserRow';



class UserTableBody extends Component {

  render() {

    return (
      <div className='list-group row'>
        {this.props.users.map(user => <User user={user.name} handleRemoveUser={this.props.handleRemoveUser} key={user.id} />)}
      </div>
    );
  }
}

export default UserTableBody;