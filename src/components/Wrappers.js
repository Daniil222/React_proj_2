import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import ErrorBoundary from './common/ErrorBoundary';
import LocalizationWrapper from './LocalizationWrapper';
import store from '../redux/store';

const Wrappers = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <BrowserRouter>
                    <LocalizationWrapper/>
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    );
};

export default Wrappers;
