export const initialState = {
  todos: [
    {
      id: 1,
      textValue: "시작하기!",
      checked: false,
    },
  ],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

const dummyPost = (data) => {
  return {
    id: 2,
    textValue: `${data}`,
    checked: false,
  };
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const CHECKED_POST = "CHECKED_POST"; //보류

export const addPostRequest = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data: data,
  };
};

export const checkedPostRequest = (id) => {
  return {
    type: CHECKED_POST,
    id,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      console.log(action.data);
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
        todos: [dummyPost(action.data), ...state.todos],
      };
    case ADD_POST_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        addPostLoading: false,
        addPostDone: true,
        todos: [dummyPost(action.data), ...state.todos],
      };
    case ADD_POST_FAILURE:
      console.log(action.data);
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
        todos: [dummyPost(action.data), ...state.todos],
      };
    default:
      return state;
  }
};

export default reducer;
