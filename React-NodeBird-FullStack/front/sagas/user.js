import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../recuders/user";

function loginAPI() {
    // 서버에 요청을 보내는 부분
}

function* login() {
    try {
        yield call(loginAPI);
        yield put({                         /* put 은 dispatch 와 동일하다. */
            type: LOG_IN_SUCCESS
        });
    // loginAPI 실패
    } catch (e) {
        console.log(e);
        yield put({
            type: LOG_IN_FAILURE
        });
    }
}

/**
 * Saga 의 역할
 * 1. takeLatest 가 LOG_IN 액션이 dispatch 되길 기다린다.
 * 2. dispatch 될 때 login 제너레이터를 호출한다.
 */
function* watchLogin() {
    yield takeLatest(LOG_IN, login);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin)
    ]);
}