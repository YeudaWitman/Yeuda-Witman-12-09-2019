import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as current from '../actions';
 
import weatherData from './currentconditions.json';
import dataByLocation from './searchByLocation.json';
import FavoritesButton from './FavoritesButton';
import Loading from './Loading';
import FiveDaysForecast from './FiveDaysForecast';
import ErrorMessage from './ErrorMessage';
import { CURRENT_CONDITION_ERROR } from '../actions/types';

const Weather = ({match}) => {

    const DEFAULT_CITY = "215854"; //Tel Aviv
    const API_KEY = process.env.REACT_APP_API_KEY;
    const cityKey = match.params.cityKey ? match.params.cityKey : DEFAULT_CITY;
    const dispatch = useDispatch();

    const CURRENT_CONDITION_API = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`;
    const DETAILS_BY_LOCATION = `http://dataservice.accuweather.com/locations/v1/${cityKey}?apikey=${API_KEY}`;
    const TEST_API = "https://my-json-server.typicode.com/YeudaWitman/mockdata/res";
    
    let isFavorites = useSelector(state => state.favorites.find(favCity => favCity.key === cityKey));
    let currentConditions = useSelector(state => state.currentConditions);
    let currentCity = useSelector(state => state.currentConditions.currentCity);

    const fetchCurrentData = () => {
      dispatch(current.fetchCurrentPending());
      axios.get(CURRENT_CONDITION_API)
      // axios.get(TEST_API)
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
              <i className="fas fa-thermometer-half"></i> {weatherData.Temperature.Metric.Value}&#176;
            </h1>
            <h3>{weatherData.WeatherText}</h3>
          </div>
          <FiveDaysForecast cityKey={cityKey}/>
        </div>
      )
    }
}

export default Weather;