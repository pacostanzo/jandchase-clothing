import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInPage from './pages/signin/sign-in-page.component';

function App() {
    return (
        <div>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInPage}/>
            </Switch>
        </div>
    );
}

export default App;
