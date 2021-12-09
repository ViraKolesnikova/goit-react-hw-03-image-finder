import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  getInputValue = event => {
    this.setState({ inputValue: event.target.value });
  };

  searchImages = event => {
    event.preventDefault();
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.onSubmit(inputValue);
      this.resetInput();
    } else {
      toast.warn('Enter word into search line!');
    }
  };

  resetInput = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles.Header}>
        <form className={styles.SearchForm} onSubmit={this.searchImages}>
          <button type="submit" className={styles.SearchFormBtn}>
            <AiOutlineSearch size="2em" color="darkgrey" />
            <span className={styles.SearchFormBtnLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            value={this.state.inputValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.getInputValue}
          />
        </form>
      </header>
    );
  }
}
