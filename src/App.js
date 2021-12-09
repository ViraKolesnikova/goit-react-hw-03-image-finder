import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import LoaderContainer from './components/LoaderContainer';

class App extends Component {
  state = {
    images: null,
    page: 1,
    searchValue: '',
    loading: false,
    total: 0,
    showModal: false,
    modalImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.makeFetch(prevState.searchValue);
    }
    if (prevState.page < this.state.page) {
      this.makeFetch(prevState.searchValue);
    }
  }

  updateState = keyWord => {
    const { searchValue } = this.state;
    if (searchValue !== keyWord) {
      this.setState({ page: 1, searchValue: keyWord });
    }
  };

  makeFetch = prevSearchValue => {
    const { page, searchValue } = this.state;
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?key=23945532-d85dbc41bbe7fd0346797d44d&q=${searchValue}&image_type=photo&page=${page}&per_page=12`,
    )
      .then(response => response.json())
      .then(data => {
        if (data.hits.length === 0) {
          toast.error('Error! Nothing was found.');
          return;
        }
        prevSearchValue === searchValue
          ? this.setState(({ images }) => ({
              images: [...images, ...data.hits],
            }))
          : this.setState({ images: data.hits, total: data.total });
      })
      .catch(console.error())
      .finally(() => this.setState({ loading: false }));
  };

  loadMore = e => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = e => {
    const { images } = this.state;
    e.preventDefault();
    this.setState({ showModal: true });
    const imageObj = images.find(image => e.target.src === image.webformatURL);
    this.setState({ modalImage: imageObj });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, loading, total, showModal, modalImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.updateState} />
        <ToastContainer autoClose={3000} />
        {loading && <LoaderContainer />}
        {images && (
          <>
            <ImageGallery data={images} onOpenModal={this.openModal} />
            {images.length < total && <Button onLoadMoreBtn={this.loadMore} />}
          </>
        )}
        {showModal && (
          <Modal
            image={modalImage.largeImageURL}
            name={modalImage.tags}
            onClose={this.hideModal}
          />
        )}
      </>
    );
  }
}

export default App;
