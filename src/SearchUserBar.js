import React, { Component } from 'react';

class SearchUserBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e){
    this.props.inputSearch(e.target.value);
  }
  
  render() {
    return (
      <div>
        <input type="text" className='form-control' placeholder='Search...' value={this.props.search} onChange={this.handleSearchChange} />
      </div>
    );
  }
}

export default SearchUserBar;