import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo  } from '../../assets/crown.svg';

import './header.styles.scss';

//import for signing out user .auth().signOut()
import { auth } from '../../firebase/firebase.utils';

 const Header = ({user}) => (
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
        </div>
     </div>
 )

 const mapStateToProps = state => ({
    user: state.user.user
 })

 export default connect(mapStateToProps)(Header);