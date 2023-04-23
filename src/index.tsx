import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {setupStore} from "./store";
import {Provider, useDispatch} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import {configSlice} from "./store/reducers/config";

const store = setupStore()

window.addEventListener('resize', () => {
    store.dispatch(configSlice.actions.setViewport())
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
