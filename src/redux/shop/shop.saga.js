import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailure
 } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log('Async Collections');

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        //call is the code, effect inside the generator function that invokes the method
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        //in redux saga put is used instead of DISPATCH
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync 
        );
}