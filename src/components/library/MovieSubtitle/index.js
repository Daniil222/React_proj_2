import React from 'react';
import PropTypes from "prop-types";

import './style.scss';

export const MovieSubtitle = (props) => {

    return(
        <div className='card__subtitle'>
            { props.subtitle }
        </div>
    )
}

MovieSubtitle.propTypes = {
    subtitle: PropTypes.string.isRequired,
};