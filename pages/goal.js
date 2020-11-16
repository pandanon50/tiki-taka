import React from "react";
import axios from "axios";
import AppLayout from "../components/AppLayout";
import GoalItem from "../components/GoalItem";
import GoalForm from "../components/GoalForm";
import { useSelector } from "react-redux";
import wrapper from "../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { END } from "redux-saga";
const Goal = () => {
  const { goals } = useSelector((state) => state.goal);
  return (
    <AppLayout>
      <GoalForm />
      {goals && goals.map((goal) => <GoalItem key={goal.id} goal={goal} />)}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Goal;
