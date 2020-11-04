import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "antd";
import DoneFail from "./DoneFail";
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
  const { goalName, cnt, id } = goal;

  const num = cnt;

  // const Icon = () => {
  //   return "👉";
  // };
  return (
    <div>
      <Global />
      <Collapse defaultActiveKey={["1"]} ghost>
        {/*  goalName 퍼센트 보이는 컴포넌트로 변경 해야함  */}
        <Panel header={goalName} key={id}>
          <GridDiv>
            {[...Array(num)].map((i) => (
              <DoneFail key={i} />
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
