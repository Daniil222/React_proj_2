import React from 'react';
import { FormattedMessage } from 'react-intl';

import './style.scss';

export const Search = () => {

    return(
        <form className="search-form">
            <input type="text" className="search-form__input" placeholder="Search for a movie, tv show, person......"/>
            <button type="submit" className="search-form__button">
                <FormattedMessage id="home.searchbtn"/>
            </button>
        </form>
    )
}