import React, { useState,useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import fire from './firebase/firebase.utils';

function App() {
  const [user,setUser] = useState(null);

  //Auth User Effect Hook to store credentials

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      }else{
        setUser('')
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInSignUpPage}></Route>
      </Switch>    
    </div>
  );
}

export default App;
