import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => (
    <div>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections 
});

export default connect(mapStateToProps)(CollectionsOverview);