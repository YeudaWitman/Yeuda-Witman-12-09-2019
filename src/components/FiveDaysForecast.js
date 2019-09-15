import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as fiveDays from '../actions';

import Loading from './Loading';
import WeatherCard from './WeatherCard.js';
import ErrorMessage from './ErrorMessage';

const FiveDaysForecast = props => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const cityKey = props.cityKey;
    const dispatch = useDispatch();

    const FIVE_DAYS_FORECAST = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`;
    const TEST_API2 = "https://my-json-server.typicode.com/YeudaWitman/mockdata2/db";
    let fiveDaysData = useSelector(state => state.fiveDays);


    const fetchFiveDaysForeCast = () => {
        dispatch(fiveDays.fetchFiveDaysPending());
        // axios.get(FIVE_DAYS_FORECAST)
        axios.get(TEST_API2)
        .then((response) => {
            // handle success
            dispatch(fiveDays.fetchFiveDaysSuccess(response.data.DailyForecasts));
        })
        .catch((error) => {
            // handle error
            console.log('error', error)
            dispatch(fiveDays.fetchFiveDaysError(error));
        })
        .finally( () => {
            // always executed
        });
    }

    React.useEffect(
        () => {
          fetchFiveDaysForeCast();
        }, [useDispatch]
      )
      
    if (fiveDaysData.error) {
        return <ErrorMessage error={fiveDaysData.error} />
    }
    if (fiveDaysData.pending) {
        return <Loading />
    }
    if (fiveDaysData.data) {
        let data = fiveDaysData.data.map((day, i) => <WeatherCard key={i} details={day} />)
        return (
            <div>
                <h5 className="text-center">Five days forecast</h5>
                <div className="row">
                    {data}
                </div>
            </div>
        )
    }
}

export default FiveDaysForecast;
