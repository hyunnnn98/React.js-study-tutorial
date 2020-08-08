export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: '조승현',
        },
        content: '첫 번째 게시글',
        img: 'https://web-source-animalcro-project.s3.ap-northeast-2.amazonaws.com/source/loading.png',
    }],
    imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
    type: ADD_POST,
};

export const addDummy = {
    type: ADD_DUMMY,
    payload: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '코코하세요',
        }
    }
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [...payload, ...state.mainPosts]
            }
        }
        case ADD_DUMMY: {
            return { ...state, }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;