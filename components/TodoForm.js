import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPostRequestAction } from "../reducers/post";
import { setContext } from "redux-saga/effects";

const TodoForm = () => {
  const { addPostDone } = useSelector((state) => state.user);
  const [dos, setDos] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (addPostDone) {
      setDos("");
    }
  }, [addPostDone]);

  const onChangeDo = useCallback((e) => {
    setDos(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequestAction(dos));
  }, [dos]);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="dos">
          &#39;날짜&#39; + &#39;할 일&#39; + &#39;기능&#39; 순서대로!{" "}
        </label>
        <br />
        <Input name="dos" value={dos} onChange={onChangeDo} required />
      </div>
      <div>
        <Button
          type="primary"
          style={{ backgroundColor: "2f54eb" }}
          htmlType="submit"
          loading={false}
        >
          확인
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
