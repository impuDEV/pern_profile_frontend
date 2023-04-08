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

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const {viewport} = useTypedSelector(state => state.configReducer)

    useEffect(() => {
        dispatch(configSlice.actions.setViewport())
    }, [])

  return (
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
