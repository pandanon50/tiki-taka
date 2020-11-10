import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Modal, Button } from "antd";
//import LoginForm from "../components/LoginForm";

const TodosWrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 100%;
`;

const todo = () => {
  const [visible, setVisible] = useState(false);
  const { todos } = useSelector((state) => state.post);
  //const { isLoggedIn } = useSelector((state) => state.user);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <AppLayout>
      <div style={{ marginBottom: "20px" }}>
        <Button type="primary" onClick={showModal}>
          +
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <TodoForm />
        </Modal>
      </div>
      <TodosWrapper className="todosWrapper">
        {todos.map((post) => (
          <TodoItem key={post.id} post={post} />
        ))}
      </TodosWrapper>
    </AppLayout>
  );
};

export default todo;
