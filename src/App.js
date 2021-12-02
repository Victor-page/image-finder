import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

import classes from 'App.module.css';

import usePrevious from 'hooks/use-previous';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(null);

  const prevQuery = usePrevious(query);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage((prevPage) =>
      prevPage === null || prevQuery !== query ? 1 : page
    );
  };

  const toggleModal = (modalPhoto) => {
    modalPhoto && setModalPhoto(modalPhoto);
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={classes.app}>
      <Searchbar onSubmit={handleFormSubmit} />

      {showModal && <Modal onClose={toggleModal} modalPhoto={modalPhoto} />}

      <ImageGallery
        onPhotoClick={toggleModal}
        query={query}
        page={page}
        onLoadMore={handleLoadMore}
      />

      <ToastContainer />
    </div>
  );
};

export default App;
