import React from 'react';

import Header from '../../common/Header/index';
import { LocalizationRoute } from './../../library/';
import root_routers from '../../root_routers'

import '../../../styles/global.scss';

const MainPage = () => {
    return (
        <div className="App">
            <Header/>
            {
                root_routers.map(
                    (route, key) => <LocalizationRoute {...route} key={key}/>
                )
            }
        </div>
    );
};

export default MainPage;
