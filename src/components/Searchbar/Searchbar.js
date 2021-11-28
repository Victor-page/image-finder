import classes from './Searchbar.module.css';

import { ReactComponent as SearchIcon } from 'icons/search.svg';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={classes.searchbar}>
      <form className={classes['search-form']} onSubmit={onSubmit}>
        <button type="submit" className={classes['search-form-button']}>
          <span className="button-label">
            <SearchIcon width="24px" height="24px" />
          </span>
        </button>

        <input
          className={classes['search-form-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
