import React, { useEffect }  from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';

function ShopPage({ match }) {
  const collectionListener = () => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
     updateCollections(collectionsMap);
    ;
    });
  };

  useEffect(() => {
    collectionListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);