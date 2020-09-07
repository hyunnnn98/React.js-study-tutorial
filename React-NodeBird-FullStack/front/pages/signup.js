import React, { useState, useCallback } from 'react';
import {
  Form, Input, Checkbox, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../recuders/user';

const TextInput = () => <div>aa</div>;

TextInput.propTypes = {
  value: PropTypes.string,
};

/*
    커스텀 훅 ( 반복을 최대한 줄이기 위해 )

    props 로 넘겨주는 함수는 useCallback 사용이 필수다!
    useCallback => ( 함수 내부에서 쓰는 state를 deps 배열에 넣자 )
    기억력이 강함.. 변수 저장을 하고 있기 때문에 deps로 넘겨주는 데이터 값 캐치 가능.
*/
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    // redux-hook
    dispatch(signUpAction({
      id,
      password,
      nick,
    }));
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(!e.target.checked);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <TextInput value="123123" />
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <br />
          <Input name="user-pass" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-chk">비밀번호 체크</label>
          <br />
          <Input name="user-password-chk" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>

    </>
  );
};

export default Signup;
