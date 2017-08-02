import React, { Component } from 'react';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.setState( prevState => ({
      deleted: !prevState.deleted
    }));
  }
  
  render() {
    if (this.state.deleted) {
      return null;
    }
    return (
      <div className='list-group-item'>
        <h3 className='d-inline col-lg-8'>{this.props.userName}</h3>
        <button className='btn btn-danger d-inline col-lg-4' onClick={()=> this.props.handleRemoveUser(this.props.user.id)} >Delete</button>
      </div>
    );
  }
}

export default UserRow;