import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
      [selectCollections],
        collections => {
            return collections.find(collection => {
            return collection.routeName === collectionUrlParam
    });
  });