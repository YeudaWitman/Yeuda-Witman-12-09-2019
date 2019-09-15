import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesCard = props => {

    const city = props.city
    
    return (
        <Link to={`/weather/${city.key}`} >
            <div className="col-sm mt-1">
                <div className="card text-center border-info">
                    <div className="card-header alert-info">
                        <h5 className="card-title">{city.name}</h5>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{city.country}</h6>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FavoritesCard;
