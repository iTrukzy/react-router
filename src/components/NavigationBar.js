import React from "react";
import {
  Link,
} from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
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
        </>
    )
}

export default NavigationBar
