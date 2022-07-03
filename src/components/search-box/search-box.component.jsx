import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onSearchChange, placeholder, className } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
