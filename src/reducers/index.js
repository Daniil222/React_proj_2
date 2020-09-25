import {combineReducers} from 'redux';
import rootReducer from './rootReducer'
import localization from './localization';

const reducers = combineReducers({
    rootReducer,
    localization
});

export default reducers
