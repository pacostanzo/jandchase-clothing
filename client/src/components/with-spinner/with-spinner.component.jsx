import React from 'react';

import Spinner from '../spinner/spinner.component';
import ErrorBoundary from "../error-boundary/error-boundary.component";

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {

    return isLoading ? <Spinner/> : <ErrorBoundary><WrappedComponent {...otherProps} /> </ErrorBoundary>;
};

export default WithSpinner;