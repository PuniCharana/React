import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'
class Users extends Component {

    render() {
        console.log(this.props);

        const userLists = this.props.users.map((user, index)=><User key={index} {...user}/>)

        return (
            <div className="Users">
                <h1>Users</h1>
                {userLists}
            </div>
        );
    }
}

const mapStateToProps =(state)=> ({
    users: state.users
})

export default connect(mapStateToProps)(Users);