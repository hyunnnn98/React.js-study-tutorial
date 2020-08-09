/*
    Next.js 에서 제공하는 공통 레이아웃 설정 파일..
    _app.js 는 props 로 Component 를 받는다. (Next 에서 넣어주는 Props)
*/
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types'; // PropTypes 를 이용하여 Props 로 넘어오는 값들을 검사할 수 있다.
import AppLayout from '../components/AppLayout';

/** redux 설계 후 적용
 * 
 *  Provider 는 컴포넌트로 만들어진다.
 *  Provider 의 props로 store를 내려주면 하위 컴포넌트에서 전체 store에 접근 가능.
 * 
 *  next.js 에서 redux 를 적용하려면 추가적으로
 *  next-redux-wrapper 라이브러리가 필요.
 */
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import reducer from '../recuders';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';  /* Redux 미들웨어 추가  */

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    // elementType ? react.js(=jsx) 안에 들어갈 수 있는 모든 것을 통칭함.
    Component: PropTypes.elementType,
    // TODO store 커스터마이징.
    store: PropTypes.object,
}

// NodeBird 로 감싸준다. => 하이오더 컴포넌트 ( 고차 컴포넌트 ) => 기존 컴포넌트 기능 확장.
export default withRedux((initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    /**
     * compose : 미들웨어들을 합성
     * applyMiddleware : middleware array에 있는 적용할 미들웨어들을 적용.
     */
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : compose(
            applyMiddleware(...middlewares),
            !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        );
    const store = createStore(reducer, initialState, enhancer);
    // 미들웨어 실행
    sagaMiddleware.run(rootSaga);
    return store;
})(NodeBird);