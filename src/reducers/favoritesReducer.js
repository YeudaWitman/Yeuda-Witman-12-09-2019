import * as types from '../actions/types';

const FAV = 'favorites';
const initState = JSON.parse(localStorage.getItem(FAV)) ? JSON.parse(localStorage.getItem(FAV)) : [];

const favorites = (state = initState, action) => {
    switch (action.type) {
        case types.ADD:
            console.log(action)
            if (state.includes(action.payload)) {
                return state; 
            }
            let favs = JSON.parse(localStorage.getItem(FAV));
            if (!favs) {
                favs = [];
            }
            favs.push(action.payload);
            localStorage.setItem(FAV, JSON.stringify(favs));
            return [...state, action.payload];
        case types.REMOVE:
            let arr = state;
            let index = arr.indexOf(action.payload);
            arr.splice(index, 1);
            localStorage.setItem(FAV, JSON.stringify(arr));
            return arr;
        default:
            return state;
    }
}

export default favorites;