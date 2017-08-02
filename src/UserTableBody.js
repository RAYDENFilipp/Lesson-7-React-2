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
      this.props.rows.push(
      <UserRow userName={this.props.userName} key={this.props.rows.length.toString()} />
    );
  }

    return (
      <div className='list-group row'>
        {this.props.rows}
      </div>
    );
  }
}

export default UserTableBody;