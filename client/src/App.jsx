import React, { useContext, useEffect } from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import AuthRouter from './components/AuthRouter';
import { Context } from '.';
import { observer } from "mobx-react-lite";

const App = observer(() => {

    const { myUser } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            myUser.checkAuth();
        }
    },[])

    const onLogOutClick = () => {
        myUser.logout();
    };

    return (
        <BrowserRouter>
            {myUser.isAuth ?
                <div className="main-page-container">
                    <Menu />
                    <div className="content-container">
                        <div className="header-container" >
                            <button onClick={onLogOutClick}>Log Out</button>
                            <button onClick={()=>myUser.checkAuth()}>Refresh</button>
                        </div>
                        <AppRouter />
                    </div>
                </div>
                :
                <AuthRouter />}
        </BrowserRouter >
    )
})

export default App;
