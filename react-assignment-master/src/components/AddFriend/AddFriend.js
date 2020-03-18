import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import './AddFriend.css'

const AddFriend = (props) => {
    const addFriends = props.friendsInfomation;
    const totalYearlySalary = addFriends.reduce( (totalYearlySalary, user) => totalYearlySalary + Number(user.salary), 0);
    return (
        <div>
            <h3>Friends Information</h3>
            <p>Total Number of Friends: {addFriends.length}</p>
            <p>Total Amount of Salary: ${totalYearlySalary}</p>
            <button className="btn"><FontAwesomeIcon icon={faUserFriends} /> Details</button>
        </div>
    )
}

export default AddFriend;