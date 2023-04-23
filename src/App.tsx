import React, {useEffect} from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import {Layout} from "antd";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";
import {configSlice, ViewportNames} from "./store/reducers/config";
import {useTypedSelector} from "./hooks/redux";
import NavBar from "./components/NavBar";
import FooterCommon from "./components/Footer";
import {useActions} from "./hooks/useActions";
import {authSlice} from "./store/reducers/auth";
import {SyncOutlined} from "@ant-design/icons/lib";
import {sectionSlice} from "./store/reducers/section";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const {viewport} = useTypedSelector(state => state.configReducer)
    const {isAuth, isLoading} = useTypedSelector(state => state.authReducer)
    const {check} = useActions()

    useEffect( () => {
        console.log('App UseEffect')
        check()
        dispatch(sectionSlice.actions.setCurrent(undefined))
        dispatch(configSlice.actions.setViewport())
    }, [])


    console.log('isAuth: ', isAuth)
  return (
      isLoading ?
          <SyncOutlined spin />
          :
          <Layout>
              {viewport !== ViewportNames.LARGE &&
              <NavBar/>
              }
              <Layout.Content>
                  <AppRouter/>
              </Layout.Content>
              <FooterCommon/>
          </Layout>
  );
}

export default App;
