import { createRoot } from 'react-dom/client';
import { StrictMode} from 'react';
import './styles/index.scss'

import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider";


const domNode = document.getElementById('root');

const root = createRoot(domNode);

    root.render(
        <StrictMode>
            <ThemeProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </StrictMode>
    );

