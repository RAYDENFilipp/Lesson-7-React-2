import React, { Component } from 'react';
import UserRow from './UserRow';



class UserTableBody extends Component {

  shouldComponentUpdate(nextProps) {
  if (this.props.userName === nextProps.userName) {
    return false;
  }

  return true;
}
  render() {
    if (this.props.userName) {
      this.props.users.push(
      <UserRow userName={this.props.userName} key={this.props.users.id} onClick={()=> this.props.handleRemoveUser(this.props.user.id)}/>
    );
  }

    return (
      <div className='list-group row'>
        {this.props.users}
      </div>
    );
  }
}

export default UserTableBody;