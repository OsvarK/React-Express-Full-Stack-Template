import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthenticationProvider } from './src/contexts/authentication.context';
import Router from './src/router';

const App = () => {
    return (
        <AuthenticationProvider>
            <Router />
        </AuthenticationProvider>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);