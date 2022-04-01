import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>welcome to T-shirt mania</h2>
            <nav>
                <Link  to={'/home'}>Home</Link>
                <Link  to={'/order-review'}>Order Review</Link>
                <Link to={'/grandpa'}>GrandPa</Link>
            </nav>

        </div>
    );
};

export default Header;