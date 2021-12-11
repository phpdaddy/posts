import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/User';
import { Paper as MuiPaper } from '@mui/material';
import { Link } from 'react-router-dom';
import { BackendUrl } from '../Constants';

const Root = styled('div')``;

const Paper = styled(MuiPaper)`
    margin-bottom: 10px;
    padding: 10px;
`;

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const call = async () => {
            const response = await axios.get(`${BackendUrl}/users`);
            setUsers(response.data);
        };
        call();
    }, []);

    return (
        <Root>
            {users.map((user) => (
                <Paper elevation={3} key={`userItem${user.id}`}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>

                    <div>username: {user.username}</div>
                    <div>email: {user.email}</div>
                </Paper>
            ))}
        </Root>
    );
};

export default UserList;