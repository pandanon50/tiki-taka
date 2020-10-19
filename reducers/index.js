import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import post from "./post";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  post,
});

export default rootReducer;
