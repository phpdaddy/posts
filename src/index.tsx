import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

let customTheme = createTheme({
    palette: {
        background: {
            default: '#815656',
        },
        primary: {
            main: '#7fb220',
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 3,
            },
            styleOverrides: {
                root: {
                    marginBottom: '10px',
                    padding: '10px',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
            },
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
