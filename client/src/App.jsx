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
            {user.isAuth ?
                <div>
                    <div className="main-page-container">
                        <Menu />
                        <div className="content-container">
                            <div className="header-container" >
                                <button onClick={onLogOutClick}>Log Out</button>
                            </div>
                            <AppRouter />
                        </div>
                    </div>
                </div> :
                <AuthRouter />}
        </BrowserRouter >
    )
})

export default App;
