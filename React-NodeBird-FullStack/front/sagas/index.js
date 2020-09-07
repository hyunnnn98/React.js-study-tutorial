import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';

/**
 * Reducer 와 동일한 폴더 구조
 * rootSaga (부모)
 * 하위 데이터 관리자 (자식)
 */
export default function* rootSaga() {
  yield all([
    call(user),
    call(post),
  ]);
}
