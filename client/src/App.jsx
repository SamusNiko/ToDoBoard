import React, { useContext } from 'react';
import "./App.css";
import Menu from './components/Menu';
import { NavLink } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import AuthRouter from './components/AuthRouter';
import { Context } from '.';
import { observer } from "mobx-react-lite";

const App = observer(() => {

    const { user } = useContext(Context);
    let content;
    const onLogOutClick = () => {
        user.setIsAuth(false)
    };

    if (user.isAuth) {
        content = <div className="main-area">
            <div className="header-area" >
                <button onClick={onLogOutClick}>Log Out</button>
            </div>
            <div className="flex-container">
                <>
                    <Menu />
                    <AppRouter />
                </>

            </div>
        </div>
    } else {
        content = <AuthRouter />
    }

    return (
        <BrowserRouter>
            {content}
        </BrowserRouter >
    )
})

export default App;
