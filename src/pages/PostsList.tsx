import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import { Paper as MuiPaper } from '@mui/material';
import { Link } from 'react-router-dom';
import { BackendUrl } from '../Constants';

const Root = styled('div')``;

const Paper = styled(MuiPaper)`
    margin-bottom: 10px;
    padding: 10px;
`;

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const call = async () => {
            const response = await axios.get(`${BackendUrl}/posts`);
            setPosts(response.data);
        };
        call();
    }, []);

    return (
        <Root>
            {posts.map((post) => (
                <Paper elevation={3} key={`postItem${post.id}`}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    <div> {post.body}</div>
                    <Link to={`/users/${post.userId}`}>Author</Link>
                </Paper>
            ))}
        </Root>
    );
};

export default PostList;
