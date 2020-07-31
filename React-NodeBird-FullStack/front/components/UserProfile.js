import React from 'react';
import { Card, Avatar } from 'antd';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '코코하세요',
        },
        content: '첫 번째 게시글',
        img: 'https://web-source-animalcro-project.s3.ap-northeast-2.amazonaws.com/source/loading.png',
    }],
    nickname: '조승현',
    Post: [],
    Followings: [],
    Followers: [],
}

const UserProfile = () => {
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
        </Card>
    );
};

export default UserProfile;