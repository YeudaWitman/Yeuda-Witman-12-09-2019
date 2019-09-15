import * as types from './types';

export const searchAction = (payload) => {
    return {
        type: types.SEARCH,
        payload
    }
}

export const suggestionAction = (payload) => {
    return {
        type: types.SUGGESTION,
        payload
    }
}

export const currentCity = (payload) => {
    return {
        type: types.CURRENT_CITY,
        payload
    }
}

export const errorAction = (payload) => {
    return {
        type: types.ERROR,
        payload
    }
}

export const addToFavorites = (payload) => {
    return {
        type: types.ADD,
        payload
    }
}

export const removeFromFavorites = (payload) => {
    return {
        type: types.REMOVE,
        payload
    }
}

export const fetchCurrentPending = () => {
    return {
        type: types.CURRENT_CONDITION_PENDING,
    }
}

export const fetchCurrentSuccess = (payload) => {
    return {
        type: types.CURRENT_CONDITION_SUCCESS,
        payload
    }
}

export const fetchCurrentError = (payload) => {
    return {
        type: types.CURRENT_CONDITION_ERROR,
        payload
    }
}

export const fetchFiveDaysPending = () => {
    return {
        type: types.FIVE_DAYS_PENDING,

    }
}

export const fetchFiveDaysSuccess = (payload) => {
    return {
        type: types.FIVE_DAYS_SUCCESS,
        payload
    }
}

export const fetchFiveDaysError = (payload) => {
    return {
        type: types.FIVE_DAYS_ERROR,
        payload
    }
}