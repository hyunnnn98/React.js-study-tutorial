import { combineReducers } from 'redux';
import user from './user';
import post from './post';


/** 루트 reducer
 *  combineReducers 를 사용해 모듈화 된 store를 한 곳으로 집합.
 */
const rootReducer = combineReducers( {
    user,
    post
});

export default rootReducer;