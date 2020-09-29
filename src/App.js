import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';


import fire from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


function App(props) {
  //Auth User Effect Hook to store credentials
  const authListener = () => {
    const { setCurrentUser } = props;
    fire.auth().onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
           setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()     
          });
        });
      }
      setCurrentUser(userAuth);
    });
  };
  

  useEffect(() => {
    authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header  />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/checkout' component={CheckoutPage}></Route>
        <Route
            exact
            path='/signin'
            render={() =>
              props.user ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage/>
              )
            }
          />
      </Switch>    
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
