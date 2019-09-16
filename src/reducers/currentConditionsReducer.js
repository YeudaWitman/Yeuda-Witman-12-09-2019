import * as types from '../actions/types';

const initState = {
    currentCity: { key: "215854", name: "Tel Aviv", country: "Israel"},
    pending: false,
    data: [],
    error: null
}

const currentConditions = (state = initState, action) => {
switch (action.type) {
    case types.CURRENT_CITY:
        console.log('action', action)
        return {
            ...state,
            currentCity: action.payload
        }
    case types.CURRENT_CONDITION_PENDING:
        return {
            ...state,
            pending: true
        };
    case types.CURRENT_CONDITION_SUCCESS:
        return {
            ...state,
            pending: false,
            data: action.payload
        };
    case types.CURRENT_CONDITION_ERROR:
        return {
            ...state,
            pending: false,
            error: action.payload
        };
    default:
        return state;
    }
}

export default currentConditions;