import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {CollectionsOverviewContainer} from './collections-overview.styles';
import ErrorBoundary from "../error-boundary/error-boundary.component";

const CollectionsOverview = ({collections}) => (
    <ErrorBoundary>
        <CollectionsOverviewContainer>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </CollectionsOverviewContainer>
    </ErrorBoundary>

);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);