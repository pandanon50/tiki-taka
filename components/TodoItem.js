import React, { useCallback, useState, useSelector, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { MinusCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { CHECKED_POST_REQUEST } from "../reducers/post";

const TodoItem = ({ post }) => {
  const dispatch = useDispatch();

  const { content, date, checked, id } = post;

  const [end, setEnd] = useState(checked);

  const style = {
    backgroundColor: "#f0f0f0",
    color: "#595959",
  };

  const style2 = {
    backgroundColor: "#2f54eb",
    color: "white",
  };

  // useEffect(() => {}, [end]);

  const onToggle = useCallback(() => {
    setEnd((prev) => !prev);
    console.log(id, end);
    dispatch({
      type: CHECKED_POST_REQUEST,
      data: { checked: !checked, postId: id },
    });
  }, [end]);

  return (
    <div className="todoItemWrapper">
      {end ? ( //false
        <CheckCircleOutlined
          style={{ color: "#2f54eb", fontSize: "16px" }}
          onClick={onToggle}
        />
      ) : (
        //true
        <MinusCircleOutlined
          style={{ color: "black", fontSize: "16px" }}
          onClick={onToggle}
        />
      )}
      <div className="textBox" style={end ? style2 : style}>
        <div className="textBox__imo">😀</div>
        <div className="textBox__text">{content}</div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default TodoItem;
