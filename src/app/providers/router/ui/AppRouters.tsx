import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom";
import MainPage from "pages/HomePage/MainPage";
import AboutPage from "pages/AboutPage/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export  function AppRouter() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path,component})=>(
                    <Route key={path} component={component} path={path}/>
                ))}
            </Routes>
    </Suspense>
    )
}
