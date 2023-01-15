import React, { Component } from 'react';

import Searchbar from "./searchBar/Searchbar";
import Modal from "./modal/Modal";

import GalleryInfo from './GalleryInfo';

import css from './App.module.css';

class App extends Component {
  state = {
    selectedPicture: '',
    imgSearch: '',
    showModal: false,
  }

   onSelectImg = (data) => {
    this.setState({ selectedPicture: data });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  formHandelSubmit = (data) => {
    this.setState({ imgSearch: data});
  };

  render() {

    const { showModal, imgSearch, selectedPicture} = this.state;

    return (

      <div className={css.App}>

        <Searchbar onSubmit={this.formHandelSubmit} />

        <GalleryInfo imgSearch={imgSearch} onSelectImg={this.onSelectImg} />


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






