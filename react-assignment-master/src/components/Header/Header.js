import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCheck, faUserFriends, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="navigation">
                <nav>
                    <a href="/shop">Friends Media</a>
                </nav>
                <div>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="social-link">
                <a href="/userCheck"><FontAwesomeIcon icon={faUserCheck} /></a>
                <a href="/userEdit"><FontAwesomeIcon icon={faUserEdit} /></a>
                <a href="/userFriends"><FontAwesomeIcon icon={faUserFriends} /></a>
            </div>
        </div>
    )
}

export default Header;