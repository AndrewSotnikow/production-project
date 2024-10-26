import React, {Suspense} from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


export const  App = () => {
const {theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {} , [theme])}>
            <button onClick={toggleTheme}> change theme</button>
                <Link to='/'>MainPage</Link>
                <Link to='/about'>AboutPage</Link>
            <AppRouter />
        </div>
    )
}
