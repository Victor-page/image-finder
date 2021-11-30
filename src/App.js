import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

class App extends Component {
  state = { showModal: false, modalPhoto: null, query: '' };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  toggleModal = (modalPhoto) => {
    modalPhoto && this.setState({ modalPhoto });

    this.setState((state) => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal, modalPhoto, query } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {showModal && (
          <Modal onClose={this.toggleModal} modalPhoto={modalPhoto} />
        )}

        <ImageGallery onPhotoClick={this.toggleModal} query={query} />

        <ToastContainer />
      </div>
    );
  }
}

export default App;
