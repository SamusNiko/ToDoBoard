import React, { useContext } from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import AuthRouter from './components/AuthRouter';
import { Context } from '.';
import { observer } from "mobx-react-lite";

const App = observer(() => {

    const { user } = useContext(Context);
    const onLogOutClick = () => {
        user.setIsAuth(false)
    };

    return (
        <BrowserRouter>
            {user.isAuth ? <div className="main-area">
                <div className="header-area" >
                    <button onClick={onLogOutClick}>Log Out</button>
                </div>
                <div className="flex-container">
                    <>
                        <Menu />
                        <AppRouter />
                    </>

                </div>
            </div> :
                <AuthRouter />}
        </BrowserRouter >
    )
})

export default App;
