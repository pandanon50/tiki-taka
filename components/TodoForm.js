import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/post";
const TodoForm = () => {
  const [dos, setDos] = useState("");
  const dispatch = useDispatch();

  const onChangeDo = useCallback((e) => {
    setDos(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    console.log(dos);
    dispatch(addPost);
    setDos("");
  }, []);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="dos">할 일</label>
        <br />
        <Input name="dos" value={dos} onChange={onChangeDo} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          추가
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
