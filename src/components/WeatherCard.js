import React from 'react';
import * as moment from 'moment';

const WeatherCard = props => {

    let details = props.details;

    var day = moment.unix(details.EpochDate);
    return (
        <div className="col-sm mt-1">
            <div className="card text-center border-info">
                <div className="card-header alert-info">
                    <h5 className="card-title">{day.format('dddd')}</h5>
                    <p className="card-title">{day.format('MMM Do YY')}</p>
                </div>
                <div className="card-body">
                    <h6 className="card-title">{details.Day.IconPhrase} </h6>
                    <p className="card-text">
                    {details.Temperature.Minimum.Value}&#176; - {details.Temperature.Maximum.Value}&#176;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;