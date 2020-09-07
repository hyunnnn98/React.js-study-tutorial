import React from 'react';
import { Button, Card, Avatar } from 'antd';
import {
  HeartOutlined, MessageOutlined, RetweetOutlined, EllipsisOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => (
  <Card
    key={+post.createdAt}
    cover={post.img && <img alt="example" src={post.img} />}
    actions={[
      <RetweetOutlined key="retweet" />,
      <HeartOutlined key="heart" />,
      <MessageOutlined key="message" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    extra={<Button>팔로우</Button>}
  >
    <Card.Meta
      avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
      title={post.User.nickname}
      description={post.content}
    />
  </Card>
);

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
