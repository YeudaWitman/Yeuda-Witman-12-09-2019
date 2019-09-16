import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as fiveDays from '../actions';
import * as vars from '../vars';

import Loading from './Loading';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';

const FiveDaysForecast = props => {

    const cityKey = props.cityKey;
    const dispatch = useDispatch();

    let fiveDaysData = useSelector(state => state.fiveDays);

    const fetchFiveDaysForeCast = () => {
        dispatch(fiveDays.fetchFiveDaysPending());
        axios.get(vars.FIVE_DAYS_FORECAST(cityKey))
        .then((response) => {
            // handle success
            dispatch(fiveDays.fetchFiveDaysSuccess(response.data.DailyForecasts));
        })
        .catch((error) => {
            // handle error
            dispatch(fiveDays.fetchFiveDaysError(error));
        })
        .finally( () => {
            // always executed
        });
    }

    React.useEffect(
        () => {
          fetchFiveDaysForeCast();
        }, []
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