import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

import IntlComponent from './InltComponent';

import config from '../config';

const LocalizationWrapper = () => {
    const lang = config.supportedLang.join('|');
    const defaultLang = config.defaultLang;
    return (
        <Switch>
            <Route path={`/:locale(${lang})`} component={IntlComponent}/>
            <Redirect to={`/${defaultLang}`}/>
        </Switch>
    )
};

export default LocalizationWrapper;
