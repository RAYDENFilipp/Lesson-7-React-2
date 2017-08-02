import React, { Component } from 'react';
import './UserTable.css';
import UserTableBody from './UserTableBody';
import AddUserBar from './AddUserBar';
import SearchUserBar from './SearchUserBar';

class UserTable extends Component {
  constructor(props) {
    super(props);
/*     this.state = {
      name: '',
      search: '',
      users: []
    } */

    this.handleInputName = this.handleInputName.bind(this);
    this.handleSearchName = this.handleSearchName.bind(this);
    this.handleAddUserName = this.handleAddUserName.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

handleInputName(name) {
  // this.setState({name: name});
}

handleSearchName(search) {
  // this.setState({search: search});
}

handleAddUserName(user) {
   const newUsers = [...this.state.users];
   newUsers.push(user);
    // this.setState({users: newUsers, name: ''})
}

handleRemoveUser(id) {
   const newUsers = [...this.state.users];
   const index = newUsers.findIndex(user => { return user.id === id});
   newUsers.splice(index, 1);
  //  this.setState({users: newUsers})
}

  
  render() {
    return (
      <div className="UserTable container">
      <AddUserBar name={this.state.name} handleAddUserName={this.handleAddUserName} inputName={this.handleInputName} />
      <SearchUserBar search={this.state.search} inputSearch={this.handleSearchName} />
      <UserTableBody userName={this.state.name} users={this.state.users} handleRemoveUser={this.handleRemoveUser} userSearch={this.state.search}/>
      </div>
    );
  }
}

export default UserTable;
