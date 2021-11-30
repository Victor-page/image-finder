import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from './Searchbar.module.css';

import IconButton from 'components/IconButton';
import { ReactComponent as SearchIcon } from 'icons/search.svg';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = ({ currentTarget: { value } }) => {
    this.setState({ searchQuery: value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.error('Enter some valid search query please.');
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={classes.searchbar}>
        <form className={classes['search-form']} onSubmit={this.handleSubmit}>
          <IconButton type="submit" aria-label="Search">
            <SearchIcon width="24px" height="24px" />
          </IconButton>

          <input
            className={classes['search-form-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
