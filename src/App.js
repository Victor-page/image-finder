import { Component } from 'react';
import Modal from 'components/Modal';

class App extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        {showModal && <Modal onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
