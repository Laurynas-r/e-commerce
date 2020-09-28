import React from 'react';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>
)



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  //use Selector to deal with quantity number
const mapStateToProps = (state) => ({
  //SelectCartItemsCount - Reselect - Selector Cart.Selectors
  itemCount: selectCartItemsCount(state) 
});
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);