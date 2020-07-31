/*
    Next.js 에서 제공하는 공통 레이아웃 설정 파일..
    _app.js 는 props 로 Component 를 받는다. (Next 에서 넣어주는 Props)
*/

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types'; // PropTypes 를 이용하여 Props 로 넘어오는 값들을 검사할 수 있다.
import AppLayout from '../components/AppLayout';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

NodeBird.propTypes = {
    // elementType ? react.js(=jsx) 안에 들어갈 수 있는 모든 것을 통칭함.
    Component: PropTypes.elementType,
}

export default NodeBird;