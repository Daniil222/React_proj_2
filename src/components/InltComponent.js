import React, {useEffect} from 'react'
import {IntlProvider} from 'react-intl';
import {Route} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";


import App from './pages/Main';
import {changeLang} from './../actions';

const IntlComponent = (props) => {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.localization.lang);
    const messages = useSelector(state => state.localization.messages);

    useEffect(() => dispatch(changeLang(props.match.params.locale)), []);

    return (
        <IntlProvider
            key={lang}
            locale={lang}
            messages={messages}
        >
            <Route component={App}/>
        </IntlProvider>
    );
};

export default IntlComponent;
