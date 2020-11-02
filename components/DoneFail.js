import React from "react";
import styled from "styled-components";

const DoneButton = styled.button`
  background-color: #5e6be5;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 7px;
`;

const DoneFail = () => {
  return (
    <div>
      <DoneButton>&nbsp;&nbsp;</DoneButton>
    </div>
  );
};

export default DoneFail;
