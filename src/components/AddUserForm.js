import React from 'react';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            address: '',
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState ({ [name]: value })
    }


    render() {
        return(
            <div className="adduser-class">
                <fieldset>
                    <legend>Add User Form</legend>
                    <div className="adduser-data">
                    <input 
                        name="name"
                        placeholder="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        name="username"
                        placeholder="username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        name="email"
                        placeholder="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        name="address"
                        placeholder="address" 
                        value={this.state.address} 
                        onChange={this.handleChange} 
                    />
                    <button onClick = {() => this.props.addUser(this.state)} > Add User </button>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default AddUserForm;