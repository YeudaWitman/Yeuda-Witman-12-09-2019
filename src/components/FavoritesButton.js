import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions';

const FavoritesButton = props => {
    console.log(props)
    let city = props.cityDetails;
    const dispatch = useDispatch();
    let isFavorites = useSelector(state => state.favorites.find(favCity => favCity.key === city.key));
    console.log(isFavorites)
    const handleAddToFavorites = (city) => {
        dispatch(addToFavorites(city));
    }

    const handleRemoveFromFavorites = (city) => {
        dispatch(removeFromFavorites(city));
    }

    const addButtonSmall = <button key={'btn1'} className="btn btn-outline-success mr d-lg-none" onClick={() => {handleAddToFavorites(city)}}><i className="far fa-heart"></i></button>;;
    const removeButtonSmall = <button key={'btn2'} className="btn btn-outline-success mr d-lg-none" onClick={() => {handleRemoveFromFavorites(city)}}><i className="fas fa-heart"></i></button>;
    const addButtonLarge = <button key={'btn3'} className="btn btn-outline-success mr w-25 d-none d-lg-block" onClick={() => {handleAddToFavorites(city)}}>Add to favorites</button>;;
    const removeButtonLarge = <button key={'btn4'} className="btn btn-outline-success mr w-25 d-none d-lg-block" onClick={() => {handleRemoveFromFavorites(city)}}>Remove from favorites</button>;

    if (!isFavorites) {
        return [
            addButtonSmall,
            addButtonLarge
        ]
    } else {
        return [
            removeButtonSmall,
            removeButtonLarge
        ]
    }
}

export default FavoritesButton;