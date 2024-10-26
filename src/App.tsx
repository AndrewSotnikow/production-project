import React, {Suspense, useContext, useState} from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/HomePage/MainPage";
import {classNames} from "./helpers/classNames";




export const  App = () => {
const {theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {} , [theme])}>
            <button onClick={toggleTheme}> change theme</button>
                <Link to='/'>MainPage</Link>
                <Link to='/about'>AboutPage</Link>
                <Suspense fallback={<div>loading...</div>}>
                    <Routes>
                        <Route path="/" element={ <MainPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                    </Routes>
                </Suspense>
        </div>
    )
}
