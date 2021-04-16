import React from 'react';
import "./App.css";
import Board from './components/Board';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App = () => {
    const boards = [
        {
            boardName: "To Do", boardId: "1", items: [
                { itemId: "1", description: "Learn English" },
                { itemId: "2", description: "Learn Java Script" },
                { itemId: "3", description: "Wash Car" },
                { itemId: "4", description: "Write essay" }
            ]
        },
        {
            boardName: "In Review", boardId: "2", items: [
                { itemId: "5", description: "Learn English" },
                { itemId: "6", description: "Learn SAPUI5" },
                { itemId: "7", description: "Write essay" }
            ]
        },
        {
            boardName: "Done", boardId: "3", items: [
                { itemId: "8", description: "Bye BMW" },
                { itemId: "9", description: "Fix iPhone" },
                { itemId: "10", description: "Borrow money" }
            ]
        }
    ];

    return (
        <BrowserRouter>
            <div className="main-area">
                <div className="header-area" />
                <div className="flex-container">
                    <Menu />
                    <AppRouter />
                    {/* <div className="flex-container content-area">
                        {boards.map((board) => {
                            return (
                                <Board key={board.boardId} boardName={board.boardName} items={board.items} />
                            )
                        })}
                    </div> */}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
