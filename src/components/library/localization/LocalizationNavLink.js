import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const LocalizationNavLink = ({to, children, ...props}) => {
    const lang = useSelector(state => state.localization.lang);

    let langPath = (typeof (to) === "object") ?
        {...to, pathname: `/${lang}${to.pathname}`} :
        `/${lang}${to}`;

    return (
        <NavLink
            to={langPath}
            {...props}
        >
            {children}
        </NavLink>)
};
