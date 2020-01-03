import React, { useEffect } from 'react';
import { Card, Typography, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsStart } from './actions';

const { Title } = Typography;

const Posts = () => {
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Title level={4}>
          This example uses redux hooks and redux saga to fetch a list of posts
          from a fake api
        </Title>
      </div>
      <Divider />
      <div>
        {post.posts.map(post => (
          <Card style={{ margin: 5 }} key={post.id}>
            <Title level={4}> {post.title}</Title>
            <p> {post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;
