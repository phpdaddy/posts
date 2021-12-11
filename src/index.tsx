import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

let customTheme = createTheme({
    palette: {
        primary: {
            main: '#7fb220',
        },
    },
});

customTheme = responsiveFontSizes(customTheme);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
