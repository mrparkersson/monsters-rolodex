import './search-box.styles.css';

const SearchBox = ({ onSearchChange, placeholder, className, searchField }) => {
  return (
    <input
      className={`search-box  ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
      value={searchField}
    />
  );
};

export default SearchBox;
