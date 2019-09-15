import React from 'react';
import { Link } from 'react-router-dom';

const SuggestionItem = props => {
    let details = props.details;
    console.log(details)
    let selectedDetails = {
        key: details.Key,
        name: details.LocalizedName,
        country: details.Country.LocalizedName
    }
    return (
        <li className="list-group-item">
        <Link to={`/weather/${details.Key}`} onClick={()=>props.resetInput(selectedDetails)}>
            <b>{details.LocalizedName}</b>, {details.Country.LocalizedName}
        </Link>
        </li>
    )
}

export default SuggestionItem;
