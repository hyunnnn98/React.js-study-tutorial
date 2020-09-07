import React, { useCallback } from 'react';
import Link from 'next/link';
import { Input, Button, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/signup';
import { LOG_IN_REQUEST } from '../recuders/user';

const LoginForm = () => {
  /* 커스텀 훅으로 처리.. */
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  /*
        useCallback => 함수 내부에서 쓰는 state를 deps 배열에 넣자
        자식컴포넌트로 넘기는 값들은 전부 useCallback 으로 감싸서 처리한다 !!!!!!

        props 로 넘겨주는 함수는 useCallback ( 내부를 기억하는 함수 ) 사용이 필수다!
        기억력이 강함.. 변수 저장을 하고 있기 때문에 deps로 넘겨주는 데이터 값 캐치 가능.
        deps 내부의 값이 바뀌면 내부 함수가 새로 만들어진다!
    */
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id, password,
      },
    });
  }, [id, password]);

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
