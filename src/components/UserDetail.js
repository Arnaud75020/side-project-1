import React from 'react';
import './UserDetail.css';



const UserDetail = ({ id, username, name, email, address, deleteUser }) => {
    return (
        <div className="user-class">
        <fieldset>
            <legend>User Informations</legend>
            <button onClick={() => deleteUser(id)}>X</button>
            <div className="user-data">
                <p><strong>Id: </strong>{id}</p>
                <p><strong>Username: </strong>{username}</p>
                <p><strong>Name: </strong>{name}</p>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Address: </strong>{address.street},{address.suite}</p>
                <p><strong>City/Zipcode </strong>{address.city} / {address.zipcode}</p>
                <p><strong>Lat/Lng </strong>{address.geo.lat} / {address.geo.lng}</p>
            </div>
        </fieldset>
        </div>
    );
}

export default UserDetail;