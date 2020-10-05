import React from "react";
import AppLayout from "../components/AppLayout";
import TodoList from "../components/TodoList";

const Home = () => {
  const TodoLister = [{ thing: "밥먹기" }, { thing: "잠자기" }];
  return (
    <AppLayout>
      <TodoList header="2020-10-7" data={TodoLister} />
    </AppLayout>
  );
};

export default Home;
