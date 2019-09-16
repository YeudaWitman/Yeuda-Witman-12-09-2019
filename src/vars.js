const API_KEY = process.env.REACT_APP_API_KEY;

// export const AUTOCOMPLETE_API = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+API_KEY+"&q=";
// export const CURRENT_CONDITION_API = (cityKey) => `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`;
// export const FIVE_DAYS_FORECAST = (cityKey) => `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`;

export const AUTOCOMPLETE_API = "https://my-json-server.typicode.com/YeudaWitman/mockdata/Autocomplete";
export const CURRENT_CONDITION_API = (dummy) => "https://my-json-server.typicode.com/YeudaWitman/mockdata/CurrentConditions";
export const FIVE_DAYS_FORECAST = (dummy) => "https://my-json-server.typicode.com/YeudaWitman/mockdata/DailyForecasts";