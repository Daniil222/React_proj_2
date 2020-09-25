import React from 'react';
import { LocalizationNavLink } from "../localization";
import { FormattedMessage } from "react-intl";

import './style.scss';

export const AddMovie = (props) => {

    const logged = true;

    if (logged) {
        return(
            <div className={`add ${props.className}`}>
                <span>
                    <div className="add__icon"></div>
                </span>
                <ul className="add__menu">
                    <li>
                        <LocalizationNavLink to="/add-movie">
                            <FormattedMessage id="nav.addmovie"/>
                        </LocalizationNavLink>
                    </li>
                </ul>
            </div>
        )
    } else {
        return(
            <div className={`add ${props.className}`}>
                <span>
                    <div className="add__icon"></div>
                </span>
                <div className="add__menu">
                    <p>
                        <FormattedMessage id="nav.didntfind" />
                    </p>
                </div>
            </div>
        )
    }

}