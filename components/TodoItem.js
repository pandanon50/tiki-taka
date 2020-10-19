import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { MinusOutlined, CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
const TodoItem = ({ post }) => {
  const { textValue } = post;
  const [end, setEnd] = useState(false);
  const onToggle = useCallback(() => {
    setEnd((prev) => !prev);
  }, []);
  return (
    <div>
      <Button
        shape="circle"
        icon={!end ? <MinusOutlined /> : <CheckOutlined />}
        onClick={onToggle}
      ></Button>
      <div>{textValue}</div>
    </div>
  );
};

export default TodoItem;
