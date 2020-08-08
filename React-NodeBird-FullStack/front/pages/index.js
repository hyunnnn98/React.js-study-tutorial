import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// react-redux Hooks 사용..
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../recuders/user'

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
}

const Home = () => {
    // dispatch 를 하면 dispatch 함수 안에 넣은 action 객체가 reducer 로 전달되는 형식이다.
    const dispatch = useDispatch();                                                                 /* 기존의 setState와 동일한 역할 */

    // useSelector 를 사용하여 전체 state에서 user 의 initialState 를 가져옴.
    const { isLoggedIn, user } = useSelector(state => state.user);                                  /* 기존의 useStated와 동일한 역할 */
    console.log('getData: ', user);

    // DependencyList 디펜던시 배열에 아무것도 안넣으면 componentDidMount 랑 동일하다.
    useEffect(() => {
        dispatch(loginAction);
        dispatch(logoutAction);
        dispatch(loginAction);
    }, []);

    return (
        <div>
            {user ? <div>로그인 했습니다 : {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
        </div>
    );
};

export default Home;