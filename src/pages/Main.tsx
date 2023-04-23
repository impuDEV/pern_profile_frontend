import React, {FC, useEffect} from 'react';
import {Layout, theme} from "antd";
import {useTypedSelector} from "../hooks/redux";
import {ViewportNames} from "../store/reducers/config";
import {useActions} from "../hooks/useActions";
import {SyncOutlined} from "@ant-design/icons/lib";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {sectionSlice} from "../store/reducers/section";

const {Content} = Layout

const Main: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {viewport} = useTypedSelector(state => state.configReducer)
    const {isLoading, sections, currentIndex} = useTypedSelector(state => state.sectionReducer)
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    const {fetchSections} = useActions()

    useEffect(() => {
        fetchSections()
        dispatch(sectionSlice.actions.setCurrent(0))
    }, [])

    return (
        <Content style={{padding: '0 50px',
            paddingTop: '50px'
        }}>

            <div
                className={viewport !== ViewportNames.LARGE ? "site-layout-content-small" : "site-layout-content-large"}
                style={{ background: colorBgContainer }}
            >
                {isLoading
                    ?
                    <SyncOutlined spin style={{fontSize: '2.5em', color: 'gray'}}/>
                    :
                    sections[0] === undefined ? '' :
                    `${sections[0].description}`
                }
            </div>

        </Content>
    );
};

export default Main;