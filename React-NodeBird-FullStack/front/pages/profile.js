import React from 'react';
import { Button, List, Card } from 'antd'
import { StopOutlined } from '@ant-design/icons';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    return (
        <div>
            <NicknameEditForm/>
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['코코하세요', '노드', '리엑트']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px'}}>
                        {/* 배열안에 JSX를 쓸때는 key 값이 필수로 들어가야 한다. */}
                        <Card actions={[<StopOutlined key="stop"/>]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['코코하세요', '노드', '리엑트']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px'}}>
                        <Card actions={[<StopOutlined key="stop"/>]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;