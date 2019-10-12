import React from 'react';
import { Link } from 'react-router-dom';
import { PostTitleProps } from '../types';

const PostTitle = ({ number, title }: PostTitleProps) => (
  <p style={{ fontSize: '15px' }}>
    <Link to={`post/${number}`}>{title}</Link>
  </p>
);

export default PostTitle;
