import React from 'react';
import "./App.css";
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App = () => {

    return (
        <BrowserRouter>
            <div className="main-area">
                <div className="header-area" />
                <div className="flex-container">
                    <Menu />
                    <AppRouter />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
