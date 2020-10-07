import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo  } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv 
} from './header.styles';

//import for signing out user .auth().signOut()
import { auth } from '../../firebase/firebase.utils';

 const Header = ({user, hidden}) => (
    <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            <div className='signin' to="/signin">
                {
                    user ? (
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
                    : 
                    (
                    <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
                    )
                }
                
            </div>
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
 )

 //added createStructuredSelector to structurize multiple states
 const mapStateToProps = createStructuredSelector({
    user : selectCurrentUser,
    hidden: selectCartHidden
 })

 export default connect(mapStateToProps)(Header);