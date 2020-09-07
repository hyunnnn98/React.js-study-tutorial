import { Card, Avatar, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../recuders/user';

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 여기서 useCallback 의 사용 이유는??
  // 자식컴포넌트(Button) 으로 값을 넘기기 때문에!!!
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {me.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
