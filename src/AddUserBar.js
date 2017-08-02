import React, { Component } from 'react';

class AddUserBar extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleNameChange(e) {
    this.props.inputName(e.target.value);
  }

  handleButtonClick(e) {
    this.props.onAdd(e.target.value);
  }
  
  render() {
    return (
      <div className='input-group'>
        <input type="text" className='form-control' placeholder='Name...' value={this.props.name} onChange={this.handleNameChange} />
        <span className='input-group-btn'>
          <input type="button" className='btn btn-success' value='Add user' onClick={this.handleButtonClick} />
        </span>
      </div>
    );
  }
}

export default AddUserBar;