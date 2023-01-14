import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '31255927-4de5778e57c1de2feb517f55b';
const ParametersSearch = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=12';

export const fetchImages = async (values) => {
    const response = await axios.post(`${BASE_URL}/?key=${API_KEY}&q=${this.props.imgSearch}&${ParametersSearch}&page=${this.props.page}`, values)
    return (response.data);
}