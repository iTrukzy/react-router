import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";

import Home from '../rutes/Home'
import Store from '../rutes/Store'
import FAQ from '../rutes/FAQ'
import About from '../rutes/About'
import App from '../rutes/App'

const Routes = () => {
    return (
        <Switch>
            <Route path="/app">
                <App />
            </Route>
            <Route path="/store">
                <Store />
            </Route>
            <Route path="/faq">
                <FAQ />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes
