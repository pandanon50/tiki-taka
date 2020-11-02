export const initialState = {
  goals: [
    {
      id: 1,
      goalName: "하루 6km 걷기 운동하기",
      week: 4,
      day: 3,
    },
  ],
};

const ADD_GOAL = "ADD_GOAL";
const dummyPost = (data, week, day) => {
  return {
    id: 2,
    goalName: `${data}`,
    week,
    day,
  };
};

export const addGoal = (data) => {
  return {
    type: ADD_GOAL,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      console.log(action.data);
      return {
        ...state,
        todos: [dummyPost(action.data), ...state.todos],
      };
    default:
      return state;
  }
};

export default reducer;
