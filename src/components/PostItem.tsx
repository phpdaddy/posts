import styled from 'styled-components';
import React from 'react';
import { Post } from '../types/Post';
import { Paper as MuiPaper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Root = styled('div')``;

const Paper = styled(MuiPaper)`
    margin-bottom: 10px;
    padding: 10px;
`;

export interface PostProps {
    post: Post;
}

export const PostItem = ({ post }: PostProps) => {
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

export default PostItem;
