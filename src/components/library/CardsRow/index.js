import React from 'react';
import PropTypes from "prop-types";

import './style.scss';

export const CardType = React.createContext(null);

export const CardsRow = (props) => {

    return(
        <CardType.Provider value={props.type}>
            <div className="cards-row">
                { props.children }
            </div>
        </CardType.Provider>
    )
}

CardsRow.propTypes = {
    type: PropTypes.oneOf( ['movie', 'trailer'] ).isRequired,
};