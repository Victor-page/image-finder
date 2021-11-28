import classes from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header class={classes.searchbar}>
      <form class={classes['search-form']} onSubmit={onSubmit}>
        <button type="submit" class={classes['search-form-button']}>
          <span class="button-label">Search</span>
        </button>

        <input
          className={classes['search-form-input']}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
