import React from 'react';

const ErrorMessage = props => {
    return (
        <div className="alert alert-danger text-center w-100 mt-3" role="alert">
            <i className="fas fa-exclamation-triangle"></i>
            <h5 className="text-center mt-3">{props.error.message}</h5>
        </div>
    )
}

export default ErrorMessage;
