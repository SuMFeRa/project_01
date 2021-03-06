import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';


const App = (props) => {


    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile"
                           element={<Profile
                               state={props.state.profilePage}/>}/>
                    <Route path="/dialogs"
                           element={<Dialogs
                               state={props.state.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>


    )
        ;
}


export default App;
