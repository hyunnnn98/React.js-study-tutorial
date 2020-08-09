const dummyUser = {
    Post: [1, 2, 3, 4, 5, 6, 7],
    Followings: [1, 2, 3, 4, 5],
    Followers: [1, 2, 3, 4, 5],
    nickname: '조승현',
    signUpData: {},
};

/*  
    Store
    유저 정보 관리
    intialState 에 넣은 값들은 초기값으로 설정된다.
*/
export const initialState = {
    isLoggedIn: false,
    user: null,
};


/*
    Action
    액션들의 이름
*/
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// export const INCREMENT_NUMBER = "INCREMENT_NUMBER"; // 동기 요청

/*
    Action
    실제 액션 ( 액션의 이름 + 넣어줄 데이터 )
*/
export const loginAction = {
    type: LOG_IN_REQUEST,
};

export const logoutAction = {
    type: LOG_OUT_REQUEST,
};

export const signUpAction = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        data: data,
    }
}

export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
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
        case LOG_IN_REQUEST: {
            return {
                ...state,
                loginData: action.data,
                isloading: true,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                loginData: action.data,
                isLoading: false,
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                signUpData: action.data,
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