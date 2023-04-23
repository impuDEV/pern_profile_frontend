import React, {FC, useState} from 'react';
import {Button, Layout, Menu, Modal} from "antd";
import type {MenuProps} from "antd";
import {NavLink} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/redux";
import {ISection} from "../models/ISection";
import index from "../store/reducers";
import {MenuOutlined, SettingOutlined} from "@ant-design/icons/lib";

const NavBar: FC = () => {
    const [isMenuSectionsOpen, setIsMenuSectionsOpen] = useState<boolean>(false)
    const [isMenuSettingsOpen, setIsMenuSettingsOpen] = useState<boolean>(false)
    const {sections, currentIndex} = useTypedSelector(state => state.sectionReducer)
    const {isAuth} = useTypedSelector(state => state.authReducer)

    const showSectionsMenu = () => {
        setIsMenuSectionsOpen(true)
    }

    const showSettingsMenu = () => {
        setIsMenuSettingsOpen(true)
    }

    const handleClose = () => {
        setIsMenuSectionsOpen(false);
        setIsMenuSettingsOpen(false);
    };
    console.log(currentIndex)
    return (
        <Layout.Header
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <Button className="nav-bar-button"
                    type="text"
                    onClick={showSectionsMenu}
            >
                <MenuOutlined style={{color:'white'}} />
            </Button>
            {isAuth && currentIndex === undefined ?
                <NavLink className="nav-bar-logo"
                         to={RouteNames.ADMIN}
                >impuDEV</NavLink>
                :
                <span className="nav-bar-logo">
                    impuDEV
                </span>
            }

            <Button className="nav-bar-button"
                    type="text"
                    onClick={showSettingsMenu}
            >
                <SettingOutlined  style={{color:'gray'}} />
            </Button>
            <Modal open={isMenuSectionsOpen}
                   onCancel={handleClose}
                   onOk={handleClose}
                   footer={null}
                   closable={false}
            >
                {sections.map(section =>
                    <Button key={section.index}
                            type={
                                section.index === currentIndex
                                    ? "primary"
                                    : "default"
                            }
                    >
                        {section.title}
                    </Button>
                )}
            </Modal>
            <Modal open={isMenuSettingsOpen}
                   onCancel={handleClose}
                   onOk={handleClose}
                   footer={null}
                   closable={false}
            >Settings</Modal>

        </Layout.Header>
    );
};

export default NavBar;