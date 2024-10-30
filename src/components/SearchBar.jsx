import React from 'react';
import styles from './SearchBar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6'; 

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <FaMagnifyingGlass className={styles.icon} /> 
      <input
        type="text"
        placeholder="Buscar Pokemon..."
        className={styles.input}
        onChange={handleChange} 
      />
    </div>
  );
};

export default SearchBar;