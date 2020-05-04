import React from 'react';
import UserDetail from './UserDetail';
import AddUserForm from './AddUserForm';
//import EditUser from './EditUser';
import axios from 'axios';


class DisplayUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: [],
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                this.setState({ users })
            })
    }

    deleteUser = (id) => {
     const users = this.state.users.filter(user => user.id !== id)  
     this.setState({ users })
    }

    editUser = () => {
        console.log('editUser')
        }

    addUser = (user) => {
        console.log(user)
    }
    

    render () {
        const { users } = this.state;
        return (
            <div>
                <AddUserForm addUser={this.addUser} />
                {users.map(user => {
                return <UserDetail 
                {...user} 
                key={user.id} 
                deleteUser={this.deleteUser}
                editUser={this.editUser} />
                })}      
            </div>
        );
    }
}

export default DisplayUsers;