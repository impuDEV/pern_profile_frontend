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

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const {viewport} = useTypedSelector(state => state.configReducer)
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const {check, setIsAuth} = useActions()

    useEffect( () => {
        dispatch(configSlice.actions.setViewport())
        if(localStorage.getItem('token')) {
            setIsAuth(true)
        }
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
