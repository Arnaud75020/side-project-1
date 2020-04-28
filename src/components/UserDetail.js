import React from 'react';
import './UserDetail.css';

const UserDetail = (props) => {
    return (
        <div className="user-class">
        <fieldset>
            <button onClick={() => props.deleteUser(props.id)}>X</button>
            <legend>User Informations</legend>
            <div className="user-data">
                <p><strong>Id: </strong>{props.id}</p>
                <p><strong>Username: </strong>{props.username}</p>
                <p><strong>Name: </strong>{props.name}</p>
                <p><strong>Email: </strong>{props.email}</p>
                <p><strong>Address: </strong>{props.address.street},{props.address.suite}</p>
                <p><strong>City/Zipcode </strong>{props.address.city} / {props.address.zipcode}</p>
                <p><strong>Lat/Lng </strong>{props.address.geo.lat} / {props.address.geo.lng}</p>
            </div>
        </fieldset>
        </div>
    );
}

export default UserDetail;