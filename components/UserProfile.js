import React, { useCallback } from "react";
import { Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);

  return (
    <div style={{ backgroundColor: "White" }}>
      <Avatar>{user && user.nickname[0]}</Avatar>
      <div>환영합니다! {user && user.nickname}님 </div>
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </div>
  );
};

export default UserProfile;
