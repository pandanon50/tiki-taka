import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";

const TodoForm = () => {
  const [dos, setDos] = useState("");

  const onChangeDo = useCallback((e) => {
    setDos(e.target.value);
  }, []);

  return (
    <Form>
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
