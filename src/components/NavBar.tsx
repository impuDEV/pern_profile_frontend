import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {NavLink} from "react-router-dom";
import {RouteNames} from "../router";

const NavBar: FC = () => {
    return (
        <Layout.Header>
            <Menu theme="dark"
                  mode="horizontal"
                  style={{display: 'block'}}
                  selectable={false}
            >
                <Menu.Item key="logo">
                    <NavLink to={RouteNames.ADMIN}
                             style={{color: 'white'}}
                    >impuDEV</NavLink>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};

export default NavBar;