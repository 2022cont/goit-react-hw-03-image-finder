import { Component } from "react";

import { ImageGallery } from './gallery/ImageGallery';
import ImSpeenerWait from './gallery/ImSpeenerWait';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '31255927-4de5778e57c1de2feb517f55b';
const ParametersSearch = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=12';

export default class GalleryInfo extends Component {
    state = {
        images: [],
        error: '',
        status: 'idle',
        page: '',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imgSearch !== this.props.imgSearch || prevProps.page !== this.props.page) {
            this.setState({ status: 'pending' });

            fetch(`${BASE_URL}/?key=${API_KEY}&${ParametersSearch}&page=${this.state.page}&q=${this.props.imgSearch}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(new Error(`According to your request ${this.props.imgSearch}, such a collection of photos was not found`));

                })
                .then(data => this.setState({
                    images: data.hits,
                    status: 'resolved',
                    page: this.props.page.toString(),
                }))
                .then(this.props.addImagesCollection(this.state.images))
                .catch(() => this.setState({ error: 'According to your request, such a collection of photos was not found', status: 'rejected' }));
        };

    };
 
    render() {
  
        const { error, status, images } = this.state;

        if (status === 'pending') {
            return (<ImSpeenerWait />)
        };

        if (status === 'rejected') {
            return (<h1>{error}</h1>)
        };

        if (status === 'resolved') {

            return (
                <ImageGallery gallery={images} onSelectImg={this.props.onSelectImg} />)
        };

    }
}
