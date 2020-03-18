import React, { useState } from 'react';
import demoData from '../../demoData';
import './Contents.css'
import User from '../User/User';
import AddFriend from '../AddFriend/AddFriend';

const Contents = () => {
    const first15 = demoData.slice(0, 15);
    const [users, setUsers] = useState(first15);
    const [friendsInfomation, setFriendsInformation] = useState([]);
    const handleFriendsInformation = (user) => {
        //console.log("Add Friends", user);
        setFriendsInformation([...friendsInfomation, user]);
    }
    return (
        <div className="container">
            <div className="profile-detail-container">
                {
                    users.map(user => <User handleFriendsInformation = {handleFriendsInformation} user={user}></User>)
                }
            </div>
            <div className="add-profile-container">
                <AddFriend friendsInfomation = {friendsInfomation}></AddFriend>
            </div>
        </div>
    );
};

export default Contents;