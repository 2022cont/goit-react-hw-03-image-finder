import React, { Component } from 'react';

import Searchbar from "./searchBar/Searchbar";
import Modal from "./modal/Modal";

import GalleryInfo from './GalleryInfo';

import css from './App.module.css';

class App extends Component {
  state = {
    page: 1,
    selectedPicture: '',
    imgSearch: '',

    imagesAll: [],

    showLoadMore: true,
    showModal: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ page: this.state.page });
    };
  }

  onSelectImg = (data) => {
    this.setState({ selectedPicture: data });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  formHandelSubmit = (data) => {
    this.setState({ imgSearch: data, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  addImagesCollection = (values) => {
  console.log('values',values)
    this.setState({ imagesAll: [this.state.imagesAll, ...values] })

  }

  render() {

    const { showModal, imgSearch, selectedPicture, page, showLoadMore,imagesAll} = this.state;

    return (

      <div className={css.App}>

        <Searchbar onSubmit={this.formHandelSubmit} />

        <GalleryInfo imgSearch={imgSearch} onSelectImg={this.onSelectImg} page={page} imagesAll={imagesAll} addImagesCollection={this.addImagesCollection}/>

        {showLoadMore && (
          <button
            type='button'
            className={css.Button}
            onClick={this.loadMore}
      >Load more</button>
        )}

        {showModal && (
          <Modal onClose={this.onSelectImg}>
            <img src={selectedPicture} alt='Modal' />
          </Modal>
        )}

      </div>
    );
  }

};
export default App;






