import React from 'react';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            address: {
                zip: '',
                street: '',
                suite: '',
                city: '',
            },
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            id: '',
            name: '',
            username: '',
            email: '',
            address: {
                zip: '',
                street: '',
                suite: '',
                city: '',
            },
        })
    }

    handleChange = (e) => {
        const currentAddress = this.state.address;
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'zip' || name === 'street' || name === 'suite' || name === 'city') {
            currentAddress[name] = value;
            this.setState({ address: currentAddress })
        } else {
            this.setState({ [name]: value })
        }
    }


    render() {
        return (
            <div className="adduser-class">
                <fieldset>
                    <legend>Add User Form</legend>
                    <div className="adduser-data">
                        <form>
                        <input
                                name="id"
                                placeholder="id"
                                value={this.state.id}
                                onChange={this.handleChange}
                            />
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
                                name="city"
                                placeholder="city"
                                value={this.state.address.city}
                                onChange={this.handleChange}
                            />
                            <input
                                name="zip"
                                placeholder="zip"
                                value={this.state.address.city}
                                onChange={this.handleChange}
                            />
                            <input
                                name="street"
                                placeholder="street"
                                value={this.state.address.city}
                                onChange={this.handleChange}
                            />
                            <input
                                name="suite"
                                placeholder="suite"
                                value={this.state.address.city}
                                onChange={this.handleChange}
                            />
                            <button
                                className="add-user-button"
                                onClick={this.handleSubmit}
                            >
                                Add User </button>
                        </form>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default AddUserForm;