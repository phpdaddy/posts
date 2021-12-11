import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../types/Post';
import { Paper, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { BackendUrl } from '../Constants';

const Root = styled('div')``;

const PostDetail = () => {
    const [post, setPost] = useState<Post | undefined>();
    const params = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`${BackendUrl}/posts/${params.postId}`);
            setPost(response.data);
        };
        fetchPost();
    }, []);

    return (
        <Root>
            {post && (
                <Paper elevation={3} key={`postItem${post.id}`}>
                    <Typography variant="h4">{post.title}</Typography>
                    <div>{post.body}</div>
                    <div>
                        <Link to={`/users/${post.userId}`}>Author</Link>
                    </div>
                </Paper>
            )}
        </Root>
    );
};

export default PostDetail;
