import { createRoot } from 'react-dom/client';
import { StrictMode, lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
const MainPage = lazy(()=> import ("./pages/HomePage/MainPage"))
const AboutPage = lazy(()=> import ("./pages/AboutPage/AboutPage"))


const domNode = document.getElementById('root');

const root = createRoot(domNode);

    root.render(
        <StrictMode>
            <Router>
                <Link to='/'>MainPage</Link>
                <Link to='/about'>AboutPage</Link>
                <Suspense fallback={<div>loading...</div>}>
                <Routes>
                        <Route path="/" element={ <MainPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                </Routes>
                </Suspense>
            </Router>

        </StrictMode>
    );

