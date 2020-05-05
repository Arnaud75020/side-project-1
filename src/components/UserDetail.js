import React from 'react';
import './UserDetail.css';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            id: this.props.id,
            username: this.props.username,
            name: this.props.name,
            email: this.props.email,
            address: this.props.address,
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }

    render() {
        const {  editMode, id, username, name, email, address } = this.state;
        return (
            <div className="user-class">
                <fieldset>
                    <button
                        className="edit-user-button"
                        onClick={() => this.setState({ editMode: !editMode })}
                    >{editMode ? 'Close Edit' : 'Edit User'}</button>
                    <button
                        className="delete-user-button"
                        onClick={() => this.props.deleteUser(id)}
                    >X</button>
                    <legend>User <strong>{id}</strong> Informations</legend>
                    <div className="user-data">
                        <p><strong>Username: </strong>{username}</p>
                        <p><strong>Name: </strong>{name}</p>
                        <p><strong>Email: </strong>{email}</p>
                        <p><strong>Address: </strong>{address.street},{address.suite}</p>
                        <p><strong>City/Zipcode </strong>{address.city} / {address.zipcode}</p>
                    </div>
                    {editMode &&
                        <form className="adduser-data" onSubmit={() => this.handleSubmit}>
                            <input name="id" value={id} onChange={this.handleChange} />
                            <input name="name" value={name} onChange={this.handleChange} />
                            <input name="username" value={username} onChange={this.handleChange} />
                            <input name="email" value={email} onChange={this.handleChange} />
                            <button type="submit" className="save-button">Save Changes</button>
                        </form>
                    }
                </fieldset>
            </div>
        );
    }
}

export default UserDetail;