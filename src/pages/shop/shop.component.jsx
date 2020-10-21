import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

function ShopPage({ match, fetchCollectionsStart }) {

  const collectionListener = () => {

    fetchCollectionsStart();

  }
 
  useEffect(() => {
    collectionListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div className='shop-page'>
    <Route 
      exact
      path={`${match.path}`}
      component={CollectionsOverviewContainer} 
    />
    <Route 
      path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer}
    />
  </div>
);}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);