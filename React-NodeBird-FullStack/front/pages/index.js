import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// react-redux Hooks 사용..
import { useDispatch, useSelector } from 'react-redux';
// import { loginAction, logoutAction } from '../recuders/user'

const Home = () => {
    // dispatch 를 하면 dispatch 함수 안에 넣은 action 객체가 reducer 로 전달되는 형식이다.
    const dispatch = useDispatch();                                                                 /* 기존의 setState와 동일한 역할 */

    // useSelector 를 사용하여 전체 state에서 user 의 initialState 를 가져옴.
    const { user, isLoggedIn } = useSelector(state => state.user);                                  /* 기존의 useStated와 동일한 역할 */
    /**
        성능 최적화를 위해 잘게 쪼개는 경우도 있다. 리랜더링 방지.
        const user = useSelector(state => state.user.user);
        const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    */
    const { mainPosts } = useSelector(state => state.post)

    // DependencyList 디펜던시 배열에 아무것도 안넣으면 componentDidMount 랑 동일하다.
    useEffect(() => {
        dispatch({
            type: 'HELLO_SAGA',
        })
        dispatch({
            type: 'HELLO_SAGA',
        })
        dispatch({
            type: 'HELLO_SAGA',
        })
    }, []);

    return (
        <div>
            {user ? <div>로그인 했습니다 : {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
        </div>
    );
};

export default Home;