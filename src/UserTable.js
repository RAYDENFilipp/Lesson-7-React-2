import React, { Component } from 'react';
import './UserTable.css';
import UserTableBody from './UserTableBody';
import AddUserBar from './AddUserBar';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      output: ''
    }

    this.handleInputName = this.handleInputName.bind(this);
    this.handleAddUserName = this.handleAddUserName.bind(this);
  }

handleInputName(name) {
  this.setState({name: name});
}

  handleAddUserName() {
    this.setState({
      output: this.state.name,
      name: ''
    });
}
  
  render() {
    return (
      <div className="UserTable container">
      <AddUserBar name={this.state.name} onAdd={this.handleAddUserName} inputName={this.handleInputName} />
      <UserTableBody userName={this.state.output} />
      </div>
    );
  }
}

export default UserTable;
