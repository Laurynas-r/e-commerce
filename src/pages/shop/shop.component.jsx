import React, { useEffect }  from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match, updateCollections }) {
  const [loading, setLoading] = React.useState(true);
  
  const collectionListener = () => {
    
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
       updateCollections(collectionsMap);
       setLoading(false);
     }));
  };

  useEffect(() => {
    collectionListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )} />
    <Route path={`${match.path}/:collectionId`} render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )} />
  </div>
);}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);