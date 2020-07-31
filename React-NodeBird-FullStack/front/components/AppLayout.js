import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'
import { Menu, Input, Row, Col } from 'antd'
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const dummy = {
    nickname: '조승현',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: true,
}
/*
    children == Props 같은 의미로 쓰인다!
*/
const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* // xs : 모바일, sm : 작은화면, md : 중간화면, lg : 큰화면 ( 가로 너비 기준 ) */}
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="#"><a target="_blank">Made by Haseyo KOKO</a></Link>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;

