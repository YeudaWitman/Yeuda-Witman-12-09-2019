import React from 'react';
import loadingIcon from './Loading.svg';

const Loading = () => {
    return (
        <div className="alert alert-info text-center w-100" role="alert">
            <img src={loadingIcon}/>
            <h5 className="text-center mt-3">Loading data...</h5>
        </div>
    )
}

export default Loading;
