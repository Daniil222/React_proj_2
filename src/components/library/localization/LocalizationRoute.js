import React from 'react'
import {Route} from 'react-router-dom';

import config from './../../../config';

export const LocalizationRoute = ({path, ...rest}) => {
    const lang = config.supportedLang.join('|');
    return (
        <Route path={`/:locale(${lang})${path}`} {...rest} />
    )
};
