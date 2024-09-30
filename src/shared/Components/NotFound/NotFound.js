import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.scss";
const NotFound = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to={isLoggedIn ? "/all-flights" : "/"}>
                Go to {isLoggedIn ? "Main Dashboard" : "Login"}
            </Link>
        </div>
    );
};

export default NotFound;
