import { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/iconbutton/IconButton';

import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

class Searchbar extends Component {
 static propTypes = {
        onSubmit: PropTypes.func,
    };

    state = {
        imgSearch: '',
    }

    handleInput = event => {
        this.setState({ imgSearch: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imgSearch.trim() === '') {
            alert('Please, enter text in the search bar ');
            return
        };
        this.props.onSubmit(this.state.imgSearch);
        this.reset();
    }

    reset = () => {
        this.setState({ imgSearch: '' });
    };


    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchform} onSubmit={this.handleSubmit}>

                    <IconButton aria-label='Icon Search' type='submit'>
                        <ImSearch style={{ size: '20px', color: "blue", verticalAlign: 'middle' }} />
                    </IconButton>

                    <input
                        className={css.searchFormInput}
                        type="text"
                        placeholder={this.state.imgSearch ? this.state.imgSearch : 'Search images and photos'}

                        value={this.state.imgSearch}
                        onChange={this.handleInput}
                    />


                </form>
            </header>
        )
    }
}

export default Searchbar;
