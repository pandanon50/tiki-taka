import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Row, Col } from "antd";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>
              <HomeOutlined />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/calendar">
            <a>
              <CalendarOutlined />
            </a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={0} md={6}></Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={0} md={6}></Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
