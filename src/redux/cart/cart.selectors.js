import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//take specific part of state
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems 
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    //Use specific part to reduce the number of quantity
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
            0
    )
);