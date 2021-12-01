import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

import classes from 'App.module.css';

class App extends Component {
  state = { showModal: false, modalPhoto: null, query: '', page: null };

  handleFormSubmit = (query) => {
    this.setState((prevState) => ({
      query,
      page:
        prevState.page === null || prevState.query !== query
          ? 1
          : this.state.page,
    }));
  };

  toggleModal = (modalPhoto) => {
    modalPhoto && this.setState({ modalPhoto });
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { showModal, modalPhoto, query, page } = this.state;

    return (
      <div className={classes.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {showModal && (
          <Modal onClose={this.toggleModal} modalPhoto={modalPhoto} />
        )}

        <ImageGallery
          onPhotoClick={this.toggleModal}
          query={query}
          page={page}
          onLoadMore={this.handleLoadMore}
        />

        <ToastContainer />
      </div>
    );
  }
}

export default App;
