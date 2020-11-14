import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import styled from "styled-components";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "antd";
//import LoginForm from "../components/LoginForm";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { LOAD_POST_REQUEST } from "../reducers/post";
const TodosWrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 100%;
`;

const todo = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { todos, addPostLoading } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, [user]);
  console.log(todos);
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
        <Button type="primary" loading={addPostLoading} onClick={showModal}>
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
        {todos && todos.map((post) => <TodoItem key={post.id} post={post} />)}
      </TodosWrapper>
    </AppLayout>
  );
};

export default todo;
