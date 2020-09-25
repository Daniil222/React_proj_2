import {CHANGE_LANG} from './../actions';

import translations from './../translations';
import config from './../config';

const LocalizationInit = {
    lang: config.defaultLang,
    messages: translations[config.defaultLang],
};

const localizationReducer = (state = LocalizationInit, action) => {
    switch (action.type) {
        case CHANGE_LANG:
            return {
                ...state,
                lang: action.payload,
                messages: translations[action.payload]
            };

        default:
            return state;
    }
};

export default localizationReducer;
