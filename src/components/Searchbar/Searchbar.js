import classes from './Searchbar.module.css';

import IconButton from 'components/IconButton';
import { ReactComponent as SearchIcon } from 'icons/search.svg';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={classes.searchbar}>
      <form className={classes['search-form']} onSubmit={onSubmit}>
        <IconButton type="submit" aria-label="Search">
          <SearchIcon width="24px" height="24px" />
        </IconButton>

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
