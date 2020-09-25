import React from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from 'react-intl';
import { useHistory } from "react-router-dom";

import { LocalizationNavLink } from '../../library/localization/index';
import {changeLang} from '../../../actions/index';
import { AddMovie, Profile } from "../../library/index";

import './style.scss';
import logo from './icons/logo.png';

const Header = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const changeLocalization = (lang) => () => {
        dispatch(changeLang(lang));
        history.push(`/${lang}${history.location.pathname.substring(3)}`);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <LocalizationNavLink to="/" className="header__item">
                        <img className="header__logo" src={logo} alt="logo"/>
                    </LocalizationNavLink>
                    <LocalizationNavLink to="/" className="header__item">
                        <FormattedMessage id="nav.main"/>
                    </LocalizationNavLink>
                    <LocalizationNavLink to="/movies" className="header__item">
                        <FormattedMessage id="nav.movie"/>
                    </LocalizationNavLink>

                    <AddMovie className="ml-auto"/>

                    <LocalizationNavLink to="/login" className="header__item">
                        <FormattedMessage id="nav.login"/>
                    </LocalizationNavLink>
                </nav>

                <Profile/>

                <div>
                    <button className="button-lang" onClick={changeLocalization('uk')}> UK </button>
                    <button className="button-lang" onClick={changeLocalization('ru')}> RU</button>
                    <button className="button-lang" onClick={changeLocalization('en')}> EN</button>
                </div>
            </div>
        </header>
    )
};


export default Header;
