import React from 'react';
import UserDetail from './UserDetail';
import axios from 'axios';


class DisplayUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: [],
        };
    this.getUsers = this.getUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    }

    getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data)
                const users = response.data
                this.setState({ users })
            })
    }

    deleteUser = (id) => {
     const users = this.state.users.filter(user => user.id !== id)  
     this.setState({ users })
    }
    

    render () {
        return (
            <div>
            <button type="button" onClick={this.getUsers}>Display Users</button>
            {this.state.users.map(function(user) {
                return <UserDetail {...user} key={user.id} deleteUser={user.deleteUser}/>
            })}        
        </div>
        );
    }
}

export default DisplayUsers;