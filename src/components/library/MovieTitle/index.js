import React from 'react';
import PropTypes from "prop-types";

import './style.scss';

export const MovieTitle = (props) => {

    return(
        <div className={`card__title ${props.className}`}>
            <a href="https://www.themoviedb.org/tv/63247?language=en-US">
                { props.title }
            </a>
        </div>
    )
}

MovieTitle.propTypes = {
    title: PropTypes.string.isRequired,
};