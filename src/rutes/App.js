import React from 'react'
import {
    Switch,
    Link,
    Route,
  } from "react-router-dom";

import Home from '../rutes/Home'
import Store from '../rutes/Store'
import FAQ from '../rutes/FAQ'
import About from '../rutes/About'

const App = () => {
    return (
        <div>
            <h2>Home Route</h2>
            <Switch>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/faq">F.A.Q</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/store">Store</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/app">App</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                
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
        </div>
    )
}

export default App
