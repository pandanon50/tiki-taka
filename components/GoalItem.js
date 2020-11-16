import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "antd";
import SuccessButton from "./SuccessButton";
import DoneButton from "./DoneButton";
import styled, { createGlobalStyle } from "styled-components";

const { Panel } = Collapse;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 3px;
`;

const Global = createGlobalStyle`
.ant-collapse-header{
  font-size:16px;
}
`;

const GoalItem = ({ goal }) => {
  const { goalName, checkTotal, id, startLine, endLine } = goal;
  console.log(goalName, checkTotal, id, startLine, endLine);
  // const Icon = () => {
  //   return "👉";
  // };
  return (
    <div>
      <Global />
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel header={goalName} key={id}>
          <div>시작일:{startLine}</div>
          <div>끝나는일:{endLine}</div>
          <GridDiv>
            {[...Array(checkTotal)].map((i) => (
              <SuccessButton key={i} props={i} />
            ))}
            {[...Array(checkTotal)].map((i) => (
              <DoneButton key={i} props={i} />
            ))}
          </GridDiv>
        </Panel>
      </Collapse>
    </div>
  );
};

GoalItem.propTypes = {
  goal: PropTypes.object.isRequired,
};

export default GoalItem;
