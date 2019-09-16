import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as current from '../actions';
import * as vars from '../vars';

import FavoritesButton from './FavoritesButton';
import Loading from './Loading';
import FiveDaysForecast from './FiveDaysForecast';
import ErrorMessage from './ErrorMessage';

const Weather = ({match}) => {

    const DEFAULT_CITY = "215854"; //Tel Aviv
    const cityKey = match.params.cityKey ? match.params.cityKey : DEFAULT_CITY;
    
    const dispatch = useDispatch();
    
    let isFavorites = useSelector(state => state.favorites.find(favCity => favCity.key === cityKey));
    let currentConditions = useSelector(state => state.currentConditions);
    let currentCity = useSelector(state => state.currentConditions.currentCity);

    const fetchCurrentData = () => {
      dispatch(current.fetchCurrentPending());
      axios.get(vars.CURRENT_CONDITION_API(cityKey))
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
      return <ErrorMessage error={currentConditions.error} />
    }
    
    if (currentConditions.pending) {
      return <Loading />
    }
    if (currentConditions.data) {
      let weatherData = null;
      let weatherText = null;
      let temperature = null;
      if (currentConditions.data.data) {
        weatherData = currentConditions.data.data;
        weatherText = weatherData.WeatherText;
        temperature = weatherData.Temperature.Metric.Value
      }
      
      return (
        <div>
          <div className="alert alert-info mt-4 text-center" role="alert">
            <nav className="alert navbar navbar-light bg-light">
              <span className="navbar-brand mb-0 h1">
                <i className="fas fa-map-marker-alt"></i>
                <b> {currentCity.name}</b>, {currentCity.country}
              </span>
              <span className="navbar-brand mb-0 h1 text-info">
                <i className={isFavorites ? "fas fa-heart" : "far fa-heart"}></i>
              </span>
              <FavoritesButton cityDetails={currentCity} />
            </nav>
            <h1>
              <i className="fas fa-thermometer-half"></i> {temperature}&#176;
            </h1>
            <h3>{weatherText}</h3>
          </div>
          <FiveDaysForecast cityKey={cityKey}/>
        </div>
      )
    }
}

export default Weather;