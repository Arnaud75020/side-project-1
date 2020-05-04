import React from 'react';

class EditUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            address: '',
        }
    }


    render() {
        return (
           <div className="user-class">
           <fieldset>
               <button onClick={() => props.deleteUser(props.id)}>X</button>
               <button  onClick={() => props.editUser(props.id)}>Edit User</button> 
               <legend>User <strong>{props.id}</strong> Informations</legend>
               <div className="user-data">
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
}

export default EditUser;