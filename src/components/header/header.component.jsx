import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo  } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

//import for signing out user .auth().signOut()
import { auth } from '../../firebase/firebase.utils';

 const Header = ({user, hidden}) => (
     <div className='header'>
            <Link className='logo-container' to="/"><Logo className='logo' /></Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/contact">CONTACT</Link>
            <div className='signin' to="/signin">
                {
                    user ? (
                    <Link className='option' onClick={() => auth.signOut()}>SIGN OUT</Link>)
                    : 
                    (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                    )
                }
                
            </div>
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
     </div>
 )

 //added createStructuredSelector to structurize multiple states
 const mapStateToProps = createStructuredSelector({
    user : selectCurrentUser,
    hidden: selectCartHidden
 })

 export default connect(mapStateToProps)(Header);