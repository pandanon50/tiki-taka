import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import SuccessButton from "./SuccessButton";
import DoneButton from "./DoneButton";
import styled, { createGlobalStyle } from "styled-components";

const { Panel } = Collapse;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 3px;
`;

const Global = createGlobalStyle`
.ant-collapse-header{
  font-size:16px;
}
`;

const GoalItem = ({ goal }) => {
  const { goalTitle, checkTotal, checkDone, id, startLine, endLine } = goal;
  console.log(goalTitle, checkTotal, id, startLine, endLine);

  const onClickRemove = useCallback(() => {
    console.log("hi");
  }, []);

  // const Icon = () => {
  //   return "👉";
  // };
  return (
    <div>
      <Global />
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel header={goalTitle} key={id}>
          <div
            style={{
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>시작일: {startLine}</div>
              <div>끝나는일: {endLine}</div>
            </div>
            <div style={{ fontSize: "20px" }}>
              <DeleteOutlined onClick={onClickRemove} />
            </div>
          </div>
          <GridDiv>
            {checkDone !== 0 &&
              [...Array(checkDone)].map((i) => (
                <DoneButton key={i} props={id} />
              ))}
            {checkTotal - checkDone > 0 &&
              [...Array(checkTotal - checkDone)].map((i) => (
                <SuccessButton key={i} props={id} />
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
