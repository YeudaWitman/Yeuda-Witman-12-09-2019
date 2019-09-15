import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesCard from './FavoritesCard';

const Favorites = () => {

    let favorites = useSelector(state => state.favorites);
    console.log(favorites)
    let favs = favorites.map((fav, i) => <FavoritesCard key={i} city={fav} />)
    
    return (
        <div className="row">
            {favs}
        </div>
    )
}

export default Favorites;
