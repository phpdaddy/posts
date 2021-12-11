import React from 'react';
import styled from 'styled-components';
import UserList from './pages/UserList';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail';
import { Typography } from '@mui/material';
import PostsList from './pages/PostsList';
import PostDetail from './pages/PostDetail';

const Root = styled('div')``;

const App = () => {
    return (
        <Root>
            <Typography component="div">
                <Routes>
                    <Route path="/" element={<Navigate to="/users" />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:userId" element={<UserDetail />} />
                    <Route path="/posts" element={<PostsList />} />
                    <Route path="/posts/:postId" element={<PostDetail />} />
                </Routes>
            </Typography>
        </Root>
    );
};

export default App;
