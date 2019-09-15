import * as types from '../actions/types';

const initState = {
    pending: false,
    data: [],
    error: null
}

const fiveDays = (state = initState, action) => {
    switch (action.type) {
        case types.FIVE_DAYS_PENDING:
            return {
                ...state,
                pending: true
            };
        case types.FIVE_DAYS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        case types.FIVE_DAYS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default fiveDays;