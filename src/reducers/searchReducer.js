import * as types from '../actions/types';

const initState = {
    query: '',
    suggestion: []
}

const search = (state = initState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return {
                ...state,
                query: action.payload
            };
        case types.SUGGESTION:
            return {
                ...state,
                suggestion: action.payload
            };
        case types.ERROR:
            return state;
        default:
            return state;
    }

}

export default search;