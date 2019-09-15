import { combineReducers } from 'redux';
import search from './searchReducer';
import favorites from './favoritesReducer';
import currentConditions from './currentConditionsReducer';
import fiveDays from './fiveDaysReducer';

const rootReducer = combineReducers({
    search,
    favorites,
    currentConditions,
    fiveDays
});

export default rootReducer;