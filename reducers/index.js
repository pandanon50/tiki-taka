import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import post from "./post";
import goal from "./goal";
import user from "./user";
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
  goal,
  user,
});

export default rootReducer;
