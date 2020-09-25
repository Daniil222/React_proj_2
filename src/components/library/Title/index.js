import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from "prop-types";

import './style.scss';

export const Title = (props) => {

    if (props.type === 'h1') {
        return (
            <div className={props.className}>
                <h1>
                    <FormattedMessage id={props.title}/>
                </h1>

                { props.children }
            </div>
        )
    } else {
        return (
            <div className={props.className}>
                <h2>
                    <FormattedMessage id={props.title}/>
                </h2>

                { props.children }
            </div>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};