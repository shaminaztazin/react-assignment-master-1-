import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
    //console.log(props);
    const {name, img, email, salary, phone, website} = props.user;
    return (
        <div>
            <div className="user">
                <h4><FontAwesomeIcon icon={faUser} /> {name}</h4>
                <img src={img} alt=""/>
                <p>Email: {email}</p>
                <p>Yearly Salary: ${salary}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <button className="btn" onClick={() => props.handleFriendsInformation(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friends</button>
            </div>
        </div>
    )
}

export default User;