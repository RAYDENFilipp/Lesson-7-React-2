import React, { Component } from 'react';
import UserRow from './UserRow';

let rows = [];

class UserTableBody extends Component {

  shouldComponentUpdate(nextProps) {
  if (this.props.userName === nextProps.userName) {
    return false;
  }

  return true;
}
  render() {
    if (this.props.userName) {
      rows.push(
      <UserRow userName={this.props.userName} key={rows.length.toString()} />
    );
  }

    return (
      <div className='list-group row'>
        {rows}
      </div>
    );
  }
}

export default UserTableBody;