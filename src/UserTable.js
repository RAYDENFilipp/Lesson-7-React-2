import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './UserTable.css';
import UserTableBody from './UserTableBody';
import AddUserBar from './AddUserBar';
import SearchUserBar from './SearchUserBar';
import * as actions from './actions/tableActions';

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
  this.props.InputName({name: name});
  // this.setState({name: name});
}

handleSearchName(search) {
  this.props.SearchName({search: search});
  // this.setState({search: search});
}

handleAddUserName(user) {
  const { users } = this.props.stateFromReducer;
   const newUsers = [...users];
   newUsers.push(user);
   this.props.AddUserName({
     users: newUsers, name: ''
   });
    // this.setState({users: newUsers, name: ''})
}

handleRemoveUser(id) {
  const { users } = this.props.stateFromReducer;
   const newUsers = [...users];
   const index = newUsers.findIndex(user => { return user.id === id});
   newUsers.splice(index, 1);
     this.props.RemoveUser({
       users: newUsers
     });
  //  this.setState({users: newUsers})
}

  
  render() {
    const {name, search, users} = this.props.stateFromReducer;
    return (
      <div className="UserTable container">
      <AddUserBar name={name} handleAddUserName={this.handleAddUserName} inputName={this.handleInputName} />
      <SearchUserBar search={search} inputSearch={this.handleSearchName} />
      <UserTableBody userName={name} users={users} handleRemoveUser={this.handleRemoveUser} userSearch={search}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    }; 
}

const UserTableConnected = connect(mapStateToProps, mapDispatchToProps)(UserTable);

export default UserTableConnected;
