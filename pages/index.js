import React from "react";
import AppLayout from "../components/AppLayout";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const TodosWrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
`;

const todo = () => {
  const { todos } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <div style={{ marginBottom: "20px" }}>
        <TodoForm />
      </div>
      <TodosWrapper>
        {todos.map((post) => (
          <TodoItem key={post.id} post={post} />
        ))}
      </TodosWrapper>
    </AppLayout>
  );
};

export default todo;
