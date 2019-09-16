import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as current from '../actions';

const FavoritesCard = props => {

    const city = props.city;

    const API_KEY = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();

    const CURRENT_CONDITION_API = `http://dataservice.accuweather.com/currentconditions/v1/${city.key}?apikey=${API_KEY}`;

    let currentConditions = useSelector(state => state.currentConditions);

    const fetchCurrentData = () => {
      dispatch(current.fetchCurrentPending());
      axios.get(CURRENT_CONDITION_API)
      .then((response) => {
        // handle success
        dispatch(current.fetchCurrentSuccess(response));
      })
      .catch((error) => {
        // handle error
        dispatch(current.fetchCurrentError(error));
      })
      .finally( () => {
        // always executed
      });
    }
  
      React.useEffect(
        () => {
          fetchCurrentData();
        }, []
      )

    if (currentConditions.error) {
        return (
            <div className="col-sm mt-1">
                <div className="card text-center border-danger">
                    <div className="card-header alert-danger">
                        <h5 className="card-title">{currentConditions.error.message}</h5>
                        <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{city.country}</h6>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </div>
        )
    }
    if (currentConditions.data) {
        return (
            <Link to={`/weather/${city.key}`} >
                <div className="col-sm mt-1">
                    <div className="card text-center border-info">
                        <div className="card-header alert-info">
                            <i className="fas fa-map-marker-alt"></i>
                            <h5 className="card-title">{city.name}</h5>
                            <h6 className="card-title">{city.country}</h6>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">10&#176;</h2>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default FavoritesCard;
