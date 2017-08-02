import React, { Component } from 'react';
import './UserTable.css';
import UserTableBody from './UserTableBody';
import AddUserBar from './AddUserBar';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      output: '',
      users: []
    }

    this.handleInputName = this.handleInputName.bind(this);
    this.handleAddUserName = this.handleAddUserName.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

handleInputName(name) {
  this.setState({name: name});
}

handleAddUserName(user) {
   const newUsers = [...this.state.users];
   newUsers.push(user);
    this.setState({users: newUsers, name: ''})
}

handleRemoveUser(id) {
   const newUsers = [...this.state.users];
   const index = newUsers.findIndex(user => { return user.id === id});
   newUsers.splice(index, 1);
   this.setState({users: newUsers})
}

  
  render() {
    return (
      <div className="UserTable container">
      <AddUserBar name={this.state.name} handleAddUserName={this.handleAddUserName} inputName={this.handleInputName} />
      <UserTableBody userName={this.state.output} users={this.state.users} handleRemoveUser={this.handleRemoveUser}/>
      </div>
    );
  }
}

export default UserTable;
