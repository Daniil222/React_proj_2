import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import './style.scss';

export const MovieMenu = () => {

    const logged = false;

    if (logged) {
        return(
                <div className="card__menu">
                    <span>
                        <div className="menu__icon"></div>
                    </span>
                    <ul className="menu__tooltip">
                        <li>
                            <Link to='/'>
                                <FormattedMessage id="home.addtolist" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FormattedMessage id="home.favourite"/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FormattedMessage id="home.watchlist"/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FormattedMessage id="home.rating"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            )
    } else {
        return(
                <div className="card__menu">
                    <span>
                        <div className="menu__icon"></div>
                    </span>
                    <ul className="menu__tooltip">
                        <p>
                            <FormattedMessage id="home.wantrate" />
                        </p>
                        <li>
                            <Link to='/'>
                                <FormattedMessage id="home.login" /> >
                            </Link>
                        </li>
                        <p>
                            <FormattedMessage id="home.notmember" />
                        </p>
                        <li>
                            <Link to='/'>
                                <FormattedMessage id="home.signup" /> >
                            </Link>
                        </li>
                    </ul>
                </div>
            )
    }

}