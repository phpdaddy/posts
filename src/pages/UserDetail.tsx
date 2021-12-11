import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/User';
import { Paper as MuiPaper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BackendUrl } from '../Constants';

const Root = styled('div')``;

const Paper = styled(MuiPaper)`
    margin-bottom: 10px;
    padding: 10px;
`;

const UserDetail = () => {
    const [user, setUser] = useState<User | undefined>();
    const params = useParams();

    useEffect(() => {
        const call = async () => {
            const response = await axios.get(`${BackendUrl}/users/${params.userId}`);
            setUser(response.data);
        };
        call();
    }, []);

    return (
        <Root>
            {user && (
                <Paper elevation={3} key={`userItem${user.id}`}>
                    <Typography variant="h4">{user.name}</Typography>
                    <div>
                        <strong>Username:</strong> {user.username}
                    </div>
                    <div>
                        <strong>Email:</strong> {user.email}
                    </div>
                    <div>
                        <strong>address:</strong> {user.address.street}, {user.address.suite}, {user.address.city},{' '}
                        {user.address.zipcode}, Geo: {user.address.geo.lat}, {user.address.geo.lng}
                    </div>
                    <div>
                        <strong>Phone:</strong> {user.phone}
                    </div>
                    <div>
                        <strong>Website:</strong> {user.website}
                    </div>
                    <div>
                        <strong>Company:</strong> {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
                    </div>
                </Paper>
            )}
        </Root>
    );
};

export default UserDetail;
