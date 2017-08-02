import React, { Component } from 'react';
import User from './UserRow';



class UserTableBody extends Component {

  render() {
    
    const usersFilter = this.props.users.filter( user => {
      return user.name.indexOf(this.props.userSearch) !== -1;
    });

    return (
      <div className='list-group row'>
        {usersFilter.map(user => <User user={user.name} handleRemoveUser={this.props.handleRemoveUser} key={user.id} id={user.id} />)}
      </div>
    );
  }
}

export default UserTableBody;