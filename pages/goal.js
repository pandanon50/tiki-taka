import React from "react";
import AppLayout from "../components/AppLayout";
import GoalItem from "../components/GoalItem";
import { useSelector } from "react-redux";
const Goal = () => {
  const { goals } = useSelector((state) => state.goal);
  return (
    <AppLayout>
      {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} />
      ))}
    </AppLayout>
  );
};

export default Goal;
