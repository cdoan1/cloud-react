import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const ConnectedUsers = ({ users }) => (
    <div>
        <h1>Users</h1>
        {users.map(el => (
        <table key={el.login.username}>
            <tbody>
                <tr>
                    <th colSpan='4'><img src={el.picture.large}/></th>
                </tr>
                <tr>
                    <td>{el.name.first}</td>
                    <td>{el.name.last}</td>
                    <td>{el.login.username}</td>
                    <td>{el.phone}</td>
                </tr>
            </tbody>
        </table>
        ))}
    </div>
);

const mapStateToProps = state => {
    return state.users;
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchUsers: users => dispatch(fetchUsers(users))
    }
};

const Users = connect(mapStateToProps, mapDispatchToProps)(ConnectedUsers);

export default Users;