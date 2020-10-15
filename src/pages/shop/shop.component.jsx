import React, { useEffect }  from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match, isCollectionFetching, isCollectionLoaded, fetchCollectionsStartAsync }) {

  const collectionListener = () => {

    fetchCollectionsStartAsync();

  }
 
  useEffect(() => {
    collectionListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} render={props => (
            <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )} />
    <Route path={`${match.path}/:collectionId`} render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )} />
  </div>
);}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);