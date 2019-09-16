import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction, suggestionAction, errorAction, currentCity } from '../actions';
import * as vars from '../vars';
import SuggestionItem from './SuggestionItem';

const Search = () => {

    const dispatch = useDispatch();
    let suggestionResults = useSelector(state => state.search.suggestion);

    const handleChange = (e) => {
        let query = e.target.value;
        dispatch(searchAction(query));
        if (query.length <= 1) {
            dispatch(suggestionAction([]));
            return;
        }
        axios.get(vars.AUTOCOMPLETE_API)
        .then((response) => {
            // handle success
            dispatch(suggestionAction(response.data));
        })
        .catch((error) => {
            // handle error
            dispatch(errorAction(error));
        })
        .finally( () => {
            // always executed
        });
    }
      
    const resetInput = (city) => {
        dispatch(currentCity(city))
        dispatch(suggestionAction([]));
    }

    let suggestionList = null
    if (suggestionResults) {
        suggestionList = suggestionResults.map((list, i) => <SuggestionItem key={i} details={list} resetInput={resetInput} />)
    }

    return (
        <>
        <div className="input-group input-group-lg mt-5">
            <input 
            type="text" className="form-control" 
            aria-label="search-bar input" 
            aria-describedby="search-bar" 
            placeholder="Search city..."
            onKeyUp={(e) => handleChange(e)}
            />

            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="search-bar"><i className="fas fa-search"></i></button>
            </div>
        </div>
        <ul className="list-group">
            {suggestionList}
        </ul>
        </>
    )
}

export default Search;