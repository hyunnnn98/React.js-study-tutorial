/*  
    Store
    유저 정보 관리
    intialState 에 넣은 값들은 초기값으로 설정된다.
*/
export const initialState = {
    isLoggedIn: false,
    user: {},
};

/*
    Action
    액션들의 이름
*/
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

/*
    Action
    실제 액션 ( 액션의 이름 + 넣어줄 데이터 )
*/
export const loginAction = {
    type: LOG_IN,
    payload: {
        nickname: '코코하세요',
    }
};

export const logoutAction = {
    type: LOG_OUT,
};

/*
    Reducer
    parms -> state, action 받음.

    주로 switch 구문을 사용하여 action.type로 구분하여 로직 생성.

    state의 상태 관리를 위해 구조분해 문법을 사용하여 기존 데이터는 살리고
    새로운 데이터를 생성해서 return 해 준다. ( 불변성을 위해서!! )
*/
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;