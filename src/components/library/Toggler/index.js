import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from "prop-types";

import './style.scss';

export const Toggler = (props) => {

    return (
        <div className={props.className}>
            {
                props.children.map( ( childItem, key ) => {
                    if( React.isValidElement(childItem) ){
                        return React.cloneElement( childItem, {
                            value: childItem.props.value,
                            active: childItem.props.active,
                            key: key
                        });
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}

export const TogglerItem = (props) => {
    return(
        <div className={
            props.active === true ?
                "toggler__item active":
                "toggler__item"
        }
        >
            <FormattedMessage id={props.value}/>
        </div>
    );
};


TogglerItem.propTypes = {
    active: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};