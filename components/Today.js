import React, { useCallback, useState } from "react";
import Proptypes from "prop-types";

const Today = ({ today }) => {
  return (
    <div>
      <div>Today`s Schedule</div>
      <div>{today}</div>
    </div>
  );
};

Today.proptypes = {
  today: Proptypes.string.isRequired,
};

export default Today;
