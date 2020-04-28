import React from 'react';
import UserDetail from './UserDetail';
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
        const { users } = this.state;
        return (
            <div>
            {users.map(user => {
                return <UserDetail 
                {...user} 
                key={user.id} 
                deleteUser={this.deleteUser} />
            })}        
        </div>
        );
    }
}

export default DisplayUsers;