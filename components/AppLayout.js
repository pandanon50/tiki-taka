import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { Menu } from "antd";

import Today from "./Today";
import TodoForm from "./TodoForm";
const today = new Date();

const AppLayout = ({ children }) => {
  return (
    <div>
      <Today today={today.getDate()} />
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>todo</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/month">
              <a>month</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/goal">
              <a>goal</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <TodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
