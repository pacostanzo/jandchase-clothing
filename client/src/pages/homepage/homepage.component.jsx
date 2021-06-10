import React from 'react';

import Directory from '../../components/directory/directory.component';


import {HomePageContainer} from "./homepage.styles";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

const HomePage = () => (
    <ErrorBoundary>
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    </ErrorBoundary>

);

export default HomePage;
