import React from "react";

const today = new Date();

const Today = () => {
  return (
    <div>
      <div>Today`s Schedule</div>
      <div>{today.getDate()}</div>
    </div>
  );
};

export default Today;
