import React, { useState,useEffect } from 'react';
import './App.css';
import firebase from 'firebase/app';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';

//firebase auth

//Part of user authentication
function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      callback({loggedIn: true});
    } else {
      callback({loggedIn: false});
    }
  });
}

function App() {
  const [user,setUser] = useState(null);

  //Auth User Effect Hook to store credentials
 useEffect(() => {
   const unsubscribe = onAuthStateChange(setUser);
   return () => {
     unsubscribe();
   };
 }, [])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInSignUpPage}></Route>
      </Switch>    
    </div>
  );
}

export default App;
