import React, { Component } from 'react';

class User extends Component {

  render() {

    return (
      <div className='list-group-item'>
        <h3 className='d-inline col-lg-8'>{this.props.user}</h3>
        <button className='btn btn-danger d-inline col-lg-4' onClick={()=> this.props.handleRemoveUser(this.props.id)} >Delete</button>
      </div>
    );
  }
}

export default User;