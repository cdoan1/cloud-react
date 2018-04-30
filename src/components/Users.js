import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const ConnectedUsers = ({ users }) => (
    <div>
        <h1>Users</h1>
        <table key='123' className='mui-table'>
            <tbody>           
            {users.map(el => (
                <tr>
                    <td>
                        <table className='mui-table' key='users-234'>
                            <tbody>
                                <tr><td><h2>{el.name.first} {el.name.last}</h2></td></tr>
                                <tr><td>{el.login.username}</td></tr>
                                <tr><td>{el.phone}</td></tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <div>
                            <img src={el.picture.large}/>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
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