import {
  all, call, fork, put, takeEvery, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../recuders/user';

function signUpAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/signup');
}

function* signUp() {
  try {
    yield call(signUpAPI);
    yield put({ /* put 은 dispatch 와 동일하다. */
      type: SIGN_UP_SUCCESS,
    });
    // loginAPI 실패
  } catch (e) {
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

/**
 * takeLatest 의 역할
 * 1. takeLatest 가 LOG_IN 액션이 dispatch 되길 기다린다.ff
 * 2. dispatch 될 때 login 제너레이터를 호출한다.
 * +) 여러번 같은 dispatch가 되어도 결과는 하나. ( EX 중복 로그인 요청 방지 )
 *
 * take 의 역할
 * 해당 액션이 dispatch 되면 제너레이터를 next 하는 이펙트.
 *
 * while (true)를 걷어내고 takeEvery OR takeLatest 를 사용하여 적용. ( 기능은 같다 )
 */

function loginAPI() {
  return axios.post('/login');
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({ /* put 은 dispatch 와 동일하다. */
      type: LOG_IN_SUCCESS,
    });
    // loginAPI 실패
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

/* call : 동기, fork : 비동기 */
export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}
