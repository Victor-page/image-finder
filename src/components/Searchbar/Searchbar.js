import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import classes from './Searchbar.module.css';

import IconButton from 'components/IconButton';
import { ReactComponent as SearchIcon } from 'icons/search.svg';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState(
    () => JSON.parse(window.localStorage.getItem('searchQuery')) ?? ''
  );

  const handleQueryChange = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter some valid search query please.');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  useEffect(() => {
    window.localStorage.setItem('searchQuery', JSON.stringify(searchQuery));
  }, [searchQuery]);

  return (
    <header className={classes.searchbar}>
      <form className={classes['search-form']} onSubmit={handleSubmit}>
        <IconButton type="submit" aria-label="Search">
          <SearchIcon width="24px" height="24px" />
        </IconButton>

        <input
          className={classes['search-form-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
