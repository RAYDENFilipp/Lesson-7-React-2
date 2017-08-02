import React, { Component } from 'react';



class AddUserBar extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleNameChange(e) {
    this.props.inputName(e.target.value);
  }

  
  render() {
const user = {name: this.props.name, id: new Date().getMilliseconds()};
    
    return (
      <div className='input-group'>
        <input type="text" className='form-control' placeholder='Name...' value={this.props.name} onChange={this.handleNameChange} />
        <span className='input-group-btn'>
          <input type="button" className='btn btn-success' value='Add user' onClick={()=> this.props.handleAddUserName(user)} />
        </span>
      </div>
    );
  }
}

export default AddUserBar;