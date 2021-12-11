import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import { BackendUrl } from '../Constants';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Paper from '../components/Paper';

const Root = styled('div')``;

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`${BackendUrl}/posts`);
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <Root>
            {posts.map((post) => (
                <Paper key={`postItem${post.id}`} elevation={3}>
                    <Typography variant="h5">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </Typography>
                    <div>{post.body}</div>
                    <div>
                        <Link to={`/users/${post.userId}`}>Author</Link>
                    </div>
                </Paper>
            ))}
        </Root>
    );
};

export default PostList;
