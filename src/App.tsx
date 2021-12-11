import React from 'react';
import styled from 'styled-components';
import UserList from './pages/UserList';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail';
import { Container, CssBaseline } from '@mui/material';
import PostsList from './pages/PostsList';
import PostDetail from './pages/PostDetail';

const Root = styled('div')`
    padding: 10px;
`;

const App = () => {
    return (
        <Root>
            <Container maxWidth="md">
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<Navigate to="/users" />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:userId" element={<UserDetail />} />
                    <Route path="/posts" element={<PostsList />} />
                    <Route path="/posts/:postId" element={<PostDetail />} />
                </Routes>
            </Container>
        </Root>
    );
};

export default App;
